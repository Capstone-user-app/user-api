'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    user_id: DataTypes.UUID,
    content: DataTypes.TEXT,
    publication_date: DataTypes.DATE,
    ticket_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    this.belongsTo(models.Ticket)
  };
  return Comment;
};