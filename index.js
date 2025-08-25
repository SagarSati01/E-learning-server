import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Razorpay from 'razorpay';

import { connectDb } from './database/db.js';
//importing routes
import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';

dotenv.config();
console.log("MONGODB_URI =", process.env.DB);

const app=express();
const port=process.env.PORT

//using middleware
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://e-learning-frontend-zpgj.vercel.app",
    ],
    credentials: true,
})
);

app.use(express.json());
export const instance=new Razorpay({
    key_id:process.env.Razorpay_Key,
    key_secret:process.env.Razorpay_Secret,

})

app.get("/",(req,res)=>{
    res.send("Server is working");
})
app.use("/uploads",express.static("uploads"));

//using routes
app.use("/api",userRoutes);
app.use("/api",courseRoutes);
app.use("/api",adminRoutes);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
    connectDb();
})
