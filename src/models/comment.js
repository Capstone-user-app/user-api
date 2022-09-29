export const loadComment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    user_email: DataTypes.STRING,
    content: DataTypes.TEXT,
    publication_date: DataTypes.DATE,
    ticket_id: DataTypes.INTEGER
  }, {})
  Comment.associate = function associate (models) {
    this.belongsTo(models.Ticket)
  }
  return Comment
}
