"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutfitArticle = exports.Outfit = exports.Article = exports.sequelize = void 0;

var _sequelize = require("sequelize");

const sequelize = process.env.DATABASE_URL === undefined || process.env.DATABASE_URL === null ? new _sequelize.Sequelize({
  database: "closet_db_development",
  username: "postgres",
  password: "postgres",
  dialect: "postgres"
}) : new _sequelize.Sequelize(process.env.DATABASE_URL, {
  protocol: "postgres",
  dialect: "postgres",
  logging: true,
  dialectOptions: {
    ssl: true
  }
});
exports.sequelize = sequelize;

class Article extends _sequelize.Model {}

exports.Article = Article;
Article.init({
  name: {
    type: _sequelize.DataTypes.STRING,
    unique: true
  },
  creator: _sequelize.DataTypes.STRING,
  type: _sequelize.DataTypes.STRING,
  color: _sequelize.DataTypes.STRING,
  fabric: _sequelize.DataTypes.STRING,
  brand: _sequelize.DataTypes.STRING,
  url: _sequelize.DataTypes.TEXT,
  imgUrl: _sequelize.DataTypes.TEXT
}, // <- Don't miss the comma between the objects
{
  freezeTableName: true,
  // stops sequelize from doing its automatic pluralization
  tableName: "Article",
  // the custom name to use for the Table
  sequelize // this is where we pass the database connection to the model

});

class Outfit extends _sequelize.Model {}

exports.Outfit = Outfit;
Outfit.init({
  name: {
    type: _sequelize.DataTypes.STRING,
    unique: true
  },
  creator: _sequelize.DataTypes.STRING
}, {
  freezeTableName: true,
  // stops sequelize from doing its automatic pluralization
  tableName: "Outfit",
  // the custom name to use for the Table
  sequelize // this is where we pass the database connection to the model

});

class OutfitArticle extends _sequelize.Model {}

exports.OutfitArticle = OutfitArticle;
OutfitArticle.init({
  article_id: {
    type: _sequelize.DataTypes.INTEGER,
    references: {
      model: 'Article',
      key: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
    unique: 'unique-article-per-outfit'
  },
  outfit_id: {
    type: _sequelize.DataTypes.INTEGER,
    references: {
      model: 'Outfit',
      key: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
    unique: 'unique-article-per-outfit'
  }
}, {
  freezeTableName: true,
  // stops sequelize from doing its automatic pluralization
  tableName: "OutfitArticle",
  // the custom name to use for the Table
  sequelize // this is where we pass the database connection to the model

});
OutfitArticle.belongsTo(Outfit, {
  foreignKey: 'outfit_id',
  targetKey: 'id',
  as: 'Outfit'
});
OutfitArticle.belongsTo(Article, {
  foreignKey: 'article_id',
  targetKey: 'id',
  as: 'Article'
});
Outfit.belongsToMany(Article, {
  through: OutfitArticle,
  foreignKey: "outfit_id"
});
Article.belongsToMany(Outfit, {
  through: OutfitArticle,
  foreignKey: 'article_id'
});