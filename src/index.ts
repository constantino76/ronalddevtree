  
  import colors from 'colors'
  
  import server from './server'
import { Double } from 'mongoose';

 


  
  const port = process.env.port||4000;
  server.listen(port, () => {
    console.log(colors.cyan(`Example app listening on port ${port}`).bold)
  })
   ;


   // practica con types


   type Product={

       id: Number
       name:String 
       price:number


   }



   let product={
 id:1,
 name:"pasta roma ",
 price:34.2
   }
   console.log( colors.cyan.bold("Listado de productos:"),product)