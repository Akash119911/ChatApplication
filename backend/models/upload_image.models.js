module.exports = (sequelizeConnect, Sequelize) => {
    const uploadImage = sequelizeConnect.define("upload_image", {
        type : {
            type : Sequelize.STRING
        },
        name : {
            type : Sequelize.STRING
        },
        data : {
            type : Sequelize.BLOB("long")
        }
    });
    return uploadImage;
};