import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    {   database: "closet_db_development",
        dialect: "postgres"
    }
)



export class Hat extends Model {}

Hat.init(
    {   
        name : {
            type: DataTypes.STRING,
            unique: true
        },
        imgUrl: DataTypes.TEXT
    },
    {   
        freezeTableName: true,     // stops sequelize from doing its automatic pluralization
        tableName: "Hat", // the custom name to use for the Table
        sequelize   // this is where we pass the database connection to the model
    }


)

export class Shirt extends Model {}

Shirt.init(
    {   
        name : {
            type: DataTypes.STRING,
            unique: true
        },
        imgUrl: DataTypes.TEXT
    },
    {   
        freezeTableName: true,     // stops sequelize from doing its automatic pluralization
        tableName: "Shirt", // the custom name to use for the Table
        sequelize   // this is where we pass the database connection to the model
    }
)

export class Outfit extends Model {}

Outfit.init (
    {
        name : {
        type: DataTypes.STRING,
        unique: true
        }
    },
    {   
        freezeTableName: true,     // stops sequelize from doing its automatic pluralization
        tableName: "Outfit", // the custom name to use for the Table
        sequelize   // this is where we pass the database connection to the model
    }
)

Hat.hasMany(Outfit)
Outfit.belongsTo(Hat)




// export class Article extends Model {}

// Article.init(
//     {   name : {
//         type: DataTypes.STRING,
//         unique: true
//     },
//         creator : DataTypes.STRING,
//         type : DataTypes.STRING,
//         color : DataTypes.STRING,
//         fabric: DataTypes.STRING,
//         brand: DataTypes.STRING,
//         url: DataTypes.TEXT,
//         imgUrl: DataTypes.TEXT
//     }
//     ,  // <- Don't miss the comma between the objects
//     {   freezeTableName: true,     // stops sequelize from doing its automatic pluralization
//         tableName: "Article", // the custom name to use for the Table
//         sequelize   // this is where we pass the database connection to the model
//     }
// )

// export class Outfit extends Model {}

// Outfit.init(
//     {   name : DataTypes.STRING,
//         hat: {
//             type: DataTypes.STRING,
//             references: {
//               // This is a reference to another model
//               model: Article,
//               // This is the column name of the referenced model
//               key: 'name',
//               // This declares when to check the foreign key constraint. PostgreSQL only.
//               deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
//             }
//           },
        // scarf: {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   },
        // buttonUp : {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   },
        // shirt : {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   },
        // sweater : {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   },
        // pants : {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   },
        // dress : {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   },
        // skirt : {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   },
        // shoes : {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   },
        // jacket : {
        //     type: DataTypes.STRING,
        //     references: {
        //       // This is a reference to another model
        //       model: Article,
        //       // This is the column name of the referenced model
        //       key: 'name',
        //       // This declares when to check the foreign key constraint. PostgreSQL only.
        //       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        //     }
        //   }
//     }
//     ,  
//     {   freezeTableName: true,     
//         tableName: "Outfit", 
//         sequelize   
//     }
// )