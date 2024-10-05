import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./config/database";
import { specs } from "./config/swagger";
import { errorHandler } from "./middleware/error-handler";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(errorHandler);

export default app;
