export const loadTicket = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    user_email: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    publication_date: DataTypes.DATE,
    status: DataTypes.SMALLINT
  }, {})
  Ticket.associate = function associate (models) {
    this.hasMany(models.Comment)
  }
  return Ticket
}
