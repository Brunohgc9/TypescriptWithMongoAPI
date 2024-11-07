import express from "express";
import cors from "cors";
import handlerError from "./middleware/handler-error";
import frutasRouter from "./router/frutas-router";

const port = process.env.WS_PORT ?
    parseInt(process.env.WS_PORT) :
    3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/frutas", frutasRouter);
app.use(handlerError());

app.listen(port, () => {
    console.log(`Servidor Web sendo executado na porta ${port}`);
});