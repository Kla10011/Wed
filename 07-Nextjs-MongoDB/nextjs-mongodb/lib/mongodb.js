import mongoose from "mongoose";

export const connectMongonDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to mongodb');
    } catch(error) {
        console.log('error connection to mongodb: ',error);
    }
}

