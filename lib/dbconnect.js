import mongoose from "mongoose";

export async function dbconnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connction successful')
    } catch (error) {
        console.log(error)
    }
}