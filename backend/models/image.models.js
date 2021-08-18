var db = require('../database.js');

module.exports = {
    storeImage : function(inputValues, callback){
        var sql = 'SELECT * FROM chatapp WHERE imageName = ?';
        db.query(sql,inputValues.imageName,function(err,data,fields){
            if(err) throw err
            if(data.length > 1){
                var msg = inputValues.imageName + " is already exists"
            }
            else{
                var sql = 'INSERT INTO chatapp SET ?';
                db.query(sql,inputValues,function(err,data){
                    if(err)throw err
                })
                var msg = inputValues.imageName + " is uploaded successfully"
            }
            return callback(msg);
        })
    }
}