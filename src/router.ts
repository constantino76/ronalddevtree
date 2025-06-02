import {Router} from 'express'
import User from './models/User';

const router=Router();

// router.get('/ecomerce', (req, res)=> {
//     res.send('Ecomerce')
//   });
 
router.post('/auth/register',async (req,res)=>{
console.log(req.body);//obtiene datos de formulario
//res.send("hola desde register")//regresa respuesta
console.log("hola desde register")

await  User.create(req.body)

});
 router.get('/GetAll',async(req,res)=>{
// await User.find

res.send("acercade");

 })
router.get('/ventas',(req,res)=>{


res.send('hola desde ventas');

})

export default router