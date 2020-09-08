const {Router}=require ('express');
const router = Router();

//rutas
router.get('/',(req,res) => {
    res.json({"Titulo": "Hola k ase"});
});

router.get('/test',(req,res) => {
    const data={
        'Nombre':'Koder',
        'Sitio Web': 'www.koder.com'
    };
    res.json(data);
});
module.exports=router;