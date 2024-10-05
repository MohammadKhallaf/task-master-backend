import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./config/database";
import { specs } from "./config/swagger";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;
