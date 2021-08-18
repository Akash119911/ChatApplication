module.exports = {
    host : 'localhost',
    user : 'root',
    password : 'akash',
    db : 'food_paradise_management_system',
    dialect : 'mysql',
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000 
    }
}