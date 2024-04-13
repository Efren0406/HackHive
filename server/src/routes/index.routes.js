//El segundo parametro de la funcion get es el controlador que se va a ejecutar
//cuando se haga una peticion get a la ruta /ping

import { Router } from "express";
import { pong } from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", pong);

export default router;
