export const loadTicket = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    userEmail: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    publicationDate: DataTypes.DATE,
    status: DataTypes.SMALLINT
  }, { tableName: 'tickets' })
  Ticket.associate = function associate (models) {
    this.hasMany(models.Comment)
  }
  return Ticket
}
