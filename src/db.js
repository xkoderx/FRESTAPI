const mysql = require('mysql');

const mysqlc = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'koder',
        database:'escuela',
    }
);

mysqlc.connect(function (err){
    if (err){
        console.log(err);
        return;
    }else{
        console.log('Base de datos conectada')
    }
});

module.exports=mysqlc;