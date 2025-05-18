import {Router} from 'express'

const router=Router();

// router.get('/ecomerce', (req, res)=> {
//     res.send('Ecomerce')
//   });
 
router.post('/auth/register',(req,res)=>{
console.log(req.body);//obtiene datos de formulario
//res.send("hola desde register")//regresa respuesta
console.log("hola desde register")


});
 router.get('/acercade',(req,res)=>{


res.send("acercade");

 })
router.get('/ventas',(req,res)=>{


res.send('hola desde ventas');

})

export default router