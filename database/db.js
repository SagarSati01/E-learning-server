// import mongoose from 'mongoose';

// export const connectDb=async()=>{
//     try{
//         await mongoose.connect(process.env.DB);
//         console.log(`Database connected`)
//     }catch(error){
//         console.log(error);
//     }
// }
import mongoose from 'mongoose';

export const connectDb = async ()=>{
    try{
        // mongoose.set("debug", true);
        const conn= await mongoose.connect(process.env.DB)
        console.log(`MongoDB connected :${conn.connection.host}`);
    } catch (error){
        console.log("MongoDB connection error:", error)
    }
};

