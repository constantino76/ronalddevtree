import mongoose from "mongoose";
import colors from 'colors';
 import User from "../models/User";
 import { IUser } from "../models/User";
export const ConectDB = async() =>{

try{

//const url = 'mongodb+srv://root:abcdef1234phpm@cluster0.3sgl0wj.mongodb.net/Linktree_node_TypeScript';

   // const {connection}=await mongoose.connect(process.env.MONGO_URI)// escribir exactamente connection al parecer es una funcion de mongosse
   const {connection}=await mongoose.connect(process.env.Mongo_URI)
const url=`${connection.host}:${connection.port}`
    console.log ( colors.magenta(`MongoDB conectado a ${url}`).italic)
    
    }

    catch(error){

console.log(colors.red.bold,'Error conectando a MongoDB:',error.messaje);
 process.exit(1)
    }




}