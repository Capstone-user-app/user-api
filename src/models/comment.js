export const loadComment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userEmail: DataTypes.STRING,
    content: DataTypes.TEXT,
    publicationDate: DataTypes.DATE,
    ticketId: DataTypes.INTEGER
  }, { tableName: 'comments' })
  Comment.associate = function associate (models) {
    this.belongsTo(models.Ticket)
  }
  return Comment
}
