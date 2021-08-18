module.exports = (sequelizeConnect, Sequelize) => {
    const chatapp = sequelizeConnect.define("chatapp", {
        fileId : {
            type : Sequelize.INTEGER,
            primaryKey : true
        },
        fileName : {
            type : Sequelize.STRING
        },
        fileImg : {
            type : Sequelize.BLOB
        },
        fileDoc : {
            type : Sequelize.BLOB
        }
    });
    return chatapp;
}