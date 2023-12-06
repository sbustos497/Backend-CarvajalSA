import express from "express";
import cors from "cors";

import contactosRoutes from "./routes/contactos.routes.js";

const app = express();


//middlewares
app.use(express.json());
app.use(cors());




app.use(contactosRoutes);

export default app;