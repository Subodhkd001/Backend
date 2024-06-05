import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

// routes routes

import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)

// jaise hi user type karega /user then control will be give to the userRouter and 
// userRouter will decide what work is to be done.


export {app}