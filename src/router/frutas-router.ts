import express from "express";
import FrutaController from "../controller/frutas-controller";

const frutasRouter = express.Router();

frutasRouter.get("/", FrutaController.getAllFrutas);
frutasRouter.post("/", FrutaController.createFruta);
frutasRouter.put("/:id", FrutaController.updateFruta);
frutasRouter.delete("/:id", FrutaController.deleteFruta);

export default frutasRouter;