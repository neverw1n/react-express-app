const { STRING } = require('sequelize');
const { INTEGER } = require('sequelize');
const sequelize = require('../settings/db');

const Articles = sequelize.define("Articles", {
  ArticleID: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  UserID: {
    type: INTEGER,
    allowNull: false
  },
  ArticleName: {
    type: STRING,
    allowNull: false
  },
  ArticleText: {
    type: STRING,
    allowNull: false
  }
});

module.exports = Articles;