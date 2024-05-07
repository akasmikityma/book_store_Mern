import express from 'express';
import cors from 'cors';
import { connectDB } from './dbConnection/ConnectDatabase.js';
import router from './routes/routerBook.js';
const app= express();
const url="mongodb://127.0.0.1:27017"
const port =process.env.PORT||3000;
app.use(cors({ origin: '*' }));
app.use(express.json());
connectDB(url);
app.use('/',router);
app.get('/',(req,res)=>{
    res.send("this is the home page >>")
})
app.listen(port,()=>{
    console.log("the server is running >>");
})