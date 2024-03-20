import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
  path: "./env",
});

connectDB();

/*
// Simple But Non Cleaner Approach For DB
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listing on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: Connecting Database ", error);
    throw error;
  }
})();
*/