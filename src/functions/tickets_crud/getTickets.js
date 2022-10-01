import { succesfullResponse } from '../../utils/response_util'
import { loadORM } from '../../config/sequelize'

export const getTickets = async (event, context, callback) => {
  const orm = await loadORM()
  const tickets = await orm.Ticket.findAll({ include: { model: orm.Comment } })
  return succesfullResponse(tickets)
}
