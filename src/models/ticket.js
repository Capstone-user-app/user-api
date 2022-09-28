'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    user_id: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    publication_date: DataTypes.DATE,
    status: DataTypes.SMALLINT
  }, {});
  Ticket.associate = function(models) {
    this.hasMany(models.Comment)
  };
  return Ticket;
};