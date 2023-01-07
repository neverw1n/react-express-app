const { STRING } = require('sequelize');
const { INTEGER } = require('sequelize');
const sequelize = require('../settings/db');

const Users = sequelize.define("Users", {
    UserId: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    UserName: {
      type: STRING,
      allowNull: false
    },
    UserPassword: {
      type: STRING,
      allowNull: false
    }
  });

module.exports = Users;