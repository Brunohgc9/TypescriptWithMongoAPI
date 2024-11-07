"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class FrutasService {
    static validateId(id) {
        try {
            return new mongodb_1.ObjectId(id);
        }
        catch (error) {
            throw new Error("O id é invalido!");
        }
    }
    static validade(fruta) {
        if (!fruta.nome) {
            throw new Error("Nome deve ser preenchido!");
        }
        if (!fruta.valor) {
            throw new Error("Valor deve ser preenchido!");
        }
        if (!fruta.unidade) {
            throw new Error("Unidade deve ser preenchido!");
        }
        if (typeof fruta.nome !== "string") {
            throw new Error("Nome deve ser um texto!");
        }
        if (typeof fruta.valor !== "number") {
            throw new Error("Valor deve ser um número!");
        }
        if (typeof fruta.unidade !== "string") {
            throw new Error("Unidade deve ser um texto!");
        }
        if (fruta.valor < 0) {
            throw new Error("Valor deve ser zero ou positivo!");
        }
        const unidades = ["kg", "saca", "pacote", "penca", "unidade"];
        if (!unidades.includes(fruta.unidade)) {
            throw new Error("Unidade dever ser válida!");
        }
    }
}
exports.default = FrutasService;
