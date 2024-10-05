import swaggerJsdoc from "swagger-jsdoc";
import { PORT } from "./config";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TaskMaster API",
      version: "1.0.0",
      description: "API documentation for TaskMaster application",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API routes files
};

export const specs = swaggerJsdoc(options);
