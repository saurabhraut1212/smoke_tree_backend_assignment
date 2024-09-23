"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddress = exports.createUser = void 0;
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const createUser = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
    return result.rows[0];
});
exports.createUser = createUser;
const createAddress = (street, city, zipCode, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query('INSERT INTO addresses (street, city, zip_code, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [street, city, zipCode, userId]);
    return result.rows[0];
});
exports.createAddress = createAddress;
