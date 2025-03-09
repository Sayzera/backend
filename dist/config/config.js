"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.connectDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const config = {
    jwtSecret: process.env.JWT_SECRET_KEY,
    jwtExpiration: 1 * 24 * 60 * 60,
};
exports.config = config;
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
    }
    catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=config.js.map