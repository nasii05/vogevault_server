import { error, log } from "console";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017')
            .then((res) => {
                console.log('connected')
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}