const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

const sequelizeConnect = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool : {
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            idle : dbConfig.pool.idle,
            acquire : dbConfig.pool.acquire
        },
        define : {
            timestamps : false,
            freezeTableName: true 
        }
    }
)

const db = {};

db.sequelizeConnect = sequelizeConnect;
db.Sequelize = Sequelize;

db.uploadImage = require('./upload_image.models.js')(sequelizeConnect, Sequelize);

module.exports = db;