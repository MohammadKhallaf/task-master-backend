import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT ?? 5000,
  jwatExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  jwtSecret: process.env.JWT_SECRET ?? "your_jwt_secret",
  mongoUri: process.env.MONGODB_URI ?? "mongodb://localhost:27017/taskmaster",
};
