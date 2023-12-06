import express from "express";
import contactosRoutes from "./routes/contactos.routes.js";

const app = express();

//middlewares
app.use(express.json());


app.use(contactosRoutes);

export default app;