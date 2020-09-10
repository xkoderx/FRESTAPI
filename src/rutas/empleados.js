const {Router} = require ('express');
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

router.post('')
module.exports=router;