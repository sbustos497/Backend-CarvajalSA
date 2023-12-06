import express from "express";
import cors from 'cors';

import contactosRoutes from "./routes/contactos.routes.js";

const app = express();


//middlewares
app.use(express.json());

app.use((req , res , next) => {
    res.status(404).json({
        message: "Not Found"
    });
});

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));

app.use(contactosRoutes);

export default app;