import { NextFunction, Request, Response } from "express";
import MongoConnection from "../db/mongo-connection";
import createError from "http-errors";
import { ObjectId } from "mongodb";
import FrutasService from "../service/frutas-service";
import Fruta from "../model/fruta";

export default class FrutaController {

    public static async getAllFrutas(req: Request, res: Response, next: NextFunction) {
        try {
            const conn = await MongoConnection.getInstance();
            const db = conn.db("devweb");
            const frutas = db.collection("frutas");
            res.status(200).json(await frutas.find().toArray());
        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }

    public static async createFruta(req: Request, res: Response, next: NextFunction) {
        const fruta: Fruta = req.body;

        try {
            FrutasService.validade(fruta);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }

        try {
            const conn = await MongoConnection.getInstance();
            const db = conn.db("devweb");
            const frutas = db.collection("frutas");
            await frutas.insertOne(fruta);
            res.status(201).json(fruta);
        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }

    public static async updateFruta(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const fruta: Fruta = req.body;
        let objectId: ObjectId;

        try {
            objectId = FrutasService.validateId(id);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }

        try {
            const conn = await MongoConnection.getInstance();
            const db = conn.db("devweb");
            const frutas = db.collection("frutas");

            if (await frutas.countDocuments({ _id: objectId }) === 0) {
                next(createError[404]("A fruta com esse id não existe!"));
                return;
            }

            try {
                FrutasService.validade(fruta);
            } catch (error) {
                next(createError[400]((error as Error).message));
                return;
            }

            await frutas.updateOne({ _id: objectId }, { $set: fruta });
            res.status(200).json(await frutas.findOne({ _id: objectId }));

        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }

    public static async deleteFruta(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        let objectId: ObjectId;

        try {
            objectId = FrutasService.validateId(id);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }

        try {
            const conn = await MongoConnection.getInstance();
            const db = conn.db("devweb");
            const frutas = db.collection("frutas");

            if (await frutas.countDocuments({ _id: objectId }) === 0) {
                next(createError[404]("A fruta com esse id não existe!"));
                return;
            }

            await frutas.deleteOne({ _id: objectId });
            res.status(204).send("");

        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }

}