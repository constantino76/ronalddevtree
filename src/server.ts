import express from "express";//Esmascript modules sintaxis 

import 'dotenv/config';

import router from './router';
import { ConectDB } from "./config/db";

const app=express();
ConectDB()

/** leer datos de formulario */

app.use(express.json())

app.use('/',router)
export default app;