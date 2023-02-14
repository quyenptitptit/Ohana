import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/index.js";
import connectDB from "./database/index.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

route(app);

const PORT = process.env.PORT;
app.listen(PORT);
