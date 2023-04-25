import mongoose from "mongoose";

export const connectDB= async(uri:string)=>{
    try{
        const db = await mongoose.connect(uri);
        console.log(`MongoDB-тэй холбогдлоо`);
    } catch(err) {
        console.log("MOngoDB-тэй холбогдоход алдаа гарлаа:",err);

    }
}