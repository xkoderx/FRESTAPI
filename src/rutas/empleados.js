const {Router} = require ('express');
const { runInNewContext } = require('vm');
const router = Router();

const mysqlc = require ('../db');

//rutas
router.get('/',(req,res) => {
    mysqlc.query('SELECT * FROM empleados',
    (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/:id',(req,res) => {
    const { id } = req.params;
    mysqlc.query('SELECT * FROM empleados WHERE id = ?',
    [id],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/',(req,res) =>{
    const {id,name,salary} = req.body;
    console.log(req.body);
    const query=`
    CALL empleadoaddoedit(? , ?, ?);
    `;
    mysqlc.query(query,[id,name,salary],(err,rows,fields)=>{
        if(!err){
            res.json({status: 'Guardado'});
        }else{
            console.log(err);
        }
    });
});

router.put('/:id',(req,res) =>{
    const { name,salary } = req.body;
    const { id } = req.params;
    const query='CALL empleadoaddoedit(?, ?, ?)';
    mysqlc.query(query,[id,name,salary], (err,rows,fields) => {
        if(!err){
            res.json({status: 'Actualizado'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/:id',(req,res) =>{
    const { id } = req.params;
    mysqlc.query('DELETE FROM empleados WHERE id=? ',[id], (err,rows,fields) => {
        if(!err){
            res.json({status: 'Borrado'});
        }else{
            console.log(err);
        }
    });
});
module.exports=router;