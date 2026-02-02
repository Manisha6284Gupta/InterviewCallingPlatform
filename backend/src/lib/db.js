import mongoose from "mongoose"
import {ENV} from "./env.js"

export const connectDB = async() => {
    try{
        // console.log("DB_URL =", ENV.DB_URL)

        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("Connecte for mongoDB:", conn.connection.host);
    }catch(error){
        console.error("Error connecting mongoDB")
        process.exit(1) // 0 means success and 1 means failure
    }
};