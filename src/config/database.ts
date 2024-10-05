import { config } from "@/config/environment";
import mongoose from "mongoose";

export function connectDB() {
  mongoose.connect(config.mongoUri);

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("MongoDB disconnected through app termination");
      process.exit(0);
    });
  });
}
