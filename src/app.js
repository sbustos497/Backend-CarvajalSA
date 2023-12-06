import express from "express";
import cors from "cors";

import contactosRoutes from "./routes/contactos.routes.js";

const app = express();


//middlewares
app.use(express.json());
app.use(cors());
app.use((req , res , next) => {
    res.status(404).json({
        message: "Not Found"
    });
});



app.use(contactosRoutes);

export default app;