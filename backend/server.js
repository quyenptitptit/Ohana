import express from "express";
import cors from "cors";
import dotenv from "dotenv";  
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import route from "./routes/index.js";
import connectDB from "./database/index.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors()); // tranh loi cors
app.use(cookieParser()); //tao cooki
app.use(express.urlencoded());
app.use(express.json()); // request dang json


route(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
});


