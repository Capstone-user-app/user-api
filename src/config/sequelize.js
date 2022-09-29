import { Sequelize } from 'sequelize'
import pg from 'pg'

import { loadTicket } from '../models/ticket'
import { loadComment } from '../models/comment'

const DATABASE_URI = process.env.DATABASE_URI || ''
const DATABASE_LOG = !process.env.DATABASE_LOG ? false : (process.env.DATABASE_LOG === 'true')

Sequelize.DATE.prototype._stringify = function _stringify (date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS')
}

let instanceSequelize = null

const commonOptions = {
  logging: DATABASE_LOG ? msg => console.log(msg) : false,
  define: {
    underscored: false,
    freezeTableName: true
  },
  timezone: '+00:00',
  dialect: 'postgres',
  dialectModule: pg
}

try {
  instanceSequelize = new Sequelize(DATABASE_URI, { ...commonOptions })
  console.log('Database started')
} catch (e) {
  console.log('Error config database', e)
}

export const testDatabase = async () => {
  try {
    await instanceSequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.log('Unable to connect to the database:', error)
  }
}

export const loadORM = async () => {
  instanceSequelize = new Sequelize(DATABASE_URI, { ...commonOptions })
  await instanceSequelize.authenticate()
  const orm = {}

  orm.Ticket = loadTicket(instanceSequelize, Sequelize.DataTypes)
  orm.Comment = loadComment(instanceSequelize, Sequelize.DataTypes)
  orm.Ticket.associate(orm)
  orm.Comment.associate(orm)

  return orm
}

export default instanceSequelize
