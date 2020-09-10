const express = require ('express');
const app = express();
const morgan = require ('morgan');
const { json } = require('express');

//ajustes
app.set('port',process.env.PORT || 80);
app.set('json spaces',2);


//middlewares
app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./rutas/empleados'));

//empezando el servidor
app.listen(app.get('port'),() => {
    console.log('Servicio en el puerto ${8080}');
});