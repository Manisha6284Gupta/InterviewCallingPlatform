import express from "express";
import cors from "cors"
import {serve} from "inngest/express"
import path from "path";

import {ENV} from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "inngest";


const app = express()
const __dirname = path.resolve();

// console.log(ENV.PORT)
// console.log(ENV.DB_URL)
app.use(express.json())
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}))
app.use("/api/inngest",serve({client:inngest,functions}))

app.get("/", (req,res) => {
    res.status(200).json({meg:"success from api"})
})



const startServer = async () => {
    if(!ENV.DB_URL){
        throw new Error("DB_URL is not defined in environment variable");
    }
    try{
        await connectDB();
        app.listen(ENV.PORT, () => {console.log("Server is running on port:", ENV.PORT)
       
})
    }catch(error){
      console.log("Error starting the server",error)
    }
}

startServer();