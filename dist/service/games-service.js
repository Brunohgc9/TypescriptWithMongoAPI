"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class GamesService {
    static validate(nome, produtora) {
        if (!nome) {
            throw new Error("O nome não pode ser nulo ou em branco");
        }
        if (!produtora) {
            throw new Error("A produtora não pode ser nula ou em branco");
        }
        if (typeof nome !== "string") {
            throw new Error("O nome deve ser um texto");
        }
        if (typeof produtora !== "string") {
            throw new Error("A produtora deve ser um texto");
        }
    }
    static validateId(id) {
        let objectId;
        try {
            objectId = new mongodb_1.ObjectId(id);
            return objectId;
        }
        catch (error) {
            throw new Error("O id é inválido!");
        }
    }
}
exports.default = GamesService;
