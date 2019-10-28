import { Model, DataTypes, Sequelize } from 'sequelize'

export const sequelize =
    (process.env.DATABASE_URL === undefined || process.env.DATABASE_URL === null) 
    ? new Sequelize ({
        database: "closet_db_development",
        username: "postgres",
        password:"postgres",
        dialect: "postgres"
    })
    : new Sequelize(
        process.env.DATABASE_URL,{
            protocol:"postgres",
            dialect: "postgres",
            logging:true,    
            dialectOptions: {
                ssl: true
            }
    })


//  looked at this for help https://khalilstemmler.com/articles/sequelize-tags-junction-pattern/
export class Article extends Model {}
Article.init(
    {   name : {
        type: DataTypes.STRING,
        unique: true
    },
        creator : DataTypes.STRING,
        type : DataTypes.STRING,
        color : DataTypes.STRING,
        fabric: DataTypes.STRING,
        brand: DataTypes.STRING,
        url: DataTypes.TEXT,
        imgUrl: DataTypes.TEXT
    }
    ,  // <- Don't miss the comma between the objects
    {   freezeTableName: true,     // stops sequelize from doing its automatic pluralization
        tableName: "Article", // the custom name to use for the Table
        sequelize   // this is where we pass the database connection to the model
    }
)

export class Outfit extends Model {}
Outfit.init (
    {
        name : {
        type: DataTypes.STRING,
        unique: true
        },
        creator: DataTypes.STRING
    },
    {   
        freezeTableName: true,     // stops sequelize from doing its automatic pluralization
        tableName: "Outfit", // the custom name to use for the Table
        sequelize   // this is where we pass the database connection to the model
    }
)


export class OutfitArticle extends Model {}
OutfitArticle.init (
    {
        article_id :  {
            type: DataTypes.INTEGER,
            references: {
                model: 'Article',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
            unique: 'unique-article-per-outfit'
        },
        outfit_id:  {
            type: DataTypes.INTEGER,
            references: {
                model: 'Outfit',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
            unique: 'unique-article-per-outfit'
        }
    },
    {   
        freezeTableName: true,     // stops sequelize from doing its automatic pluralization
        tableName: "OutfitArticle", // the custom name to use for the Table
        sequelize   // this is where we pass the database connection to the model
    }
)

OutfitArticle.belongsTo( Outfit, {foreignKey: 'outfit_id', targetKey: 'id', as: 'Outfit'})
OutfitArticle.belongsTo( Article, {foreignKey: 'article_id', targetKey: 'id', as: 'Article'})

Outfit.belongsToMany(Article, { through: OutfitArticle, foreignKey: "outfit_id"});
Article.belongsToMany(Outfit, { through: OutfitArticle, foreignKey: 'article_id'});

