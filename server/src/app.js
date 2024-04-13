import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

//indicamos que rutas vamos a utilizar en toda la app, importamos las rutas
//con el archivo de rutas que importamos desde las rutas

//rutas de ejemplo
app.use(indexRoutes);
//app.use(flashcardsRoutes);

//Rutas reales
/* app.use(comandas);
app.use(menu);
app.use(empleadoRoute); */
export default app;
