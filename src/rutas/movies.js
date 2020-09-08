const {Router}=require ('express');
const router = Router();

//rutas
router.get('/movies',(req,res) => {
    const data={
        'Nombre':'movbies',
        'Sitio Web': 'www.kodermv.com'
    };
    res.json(data);
});
module.exports=router;