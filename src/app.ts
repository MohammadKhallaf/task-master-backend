import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

export default app;
