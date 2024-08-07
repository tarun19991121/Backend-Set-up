// require('dotenv').config(path: "./env")

import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
import express from "express";
const app = express()

(   async () => {
    try {
        await mongoose.connect(`${(process.env.MONGODB_URI)}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Not able to connect", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is running on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})() */
