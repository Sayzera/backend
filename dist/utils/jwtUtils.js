"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
// src/utils/jwtUtils.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, config_1.config.jwtSecret, { expiresIn: Number(config_1.config.jwtExpiration) });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, config_1.config.jwtSecret);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwtUtils.js.map