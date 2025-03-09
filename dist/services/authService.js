"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLogin = exports.registerUser = exports.loginUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const jwtUtils_1 = require("../utils/jwtUtils");
const loginUser = async (username, password) => {
    const user = await userModel_1.default.findOne({ username });
    if (!user) {
        throw new Error('Kullanıcı bulunamadı');
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
        throw new Error('Yanlış şifre');
    }
    // Token oluştur
    const token = (0, jwtUtils_1.generateToken)({ id: user._id, username: user.username });
    return {
        token,
        id: user._id,
    };
};
exports.loginUser = loginUser;
const registerUser = async (username, password) => {
    const existingUser = await userModel_1.default.findOne({ username });
    if (existingUser) {
        throw new Error('Kullanıcı adı zaten alınmış');
    }
    const newUser = new userModel_1.default({ username, password });
    await newUser.save();
    return newUser;
};
exports.registerUser = registerUser;
const isLogin = async ({ token, }) => {
    const payload = (0, jwtUtils_1.verifyToken)(token);
    const user = await userModel_1.default.findById(payload.id);
    if (!user) {
        throw new Error('Kullanıcı bulunamadı');
    }
    return user;
};
exports.isLogin = isLogin;
//# sourceMappingURL=authService.js.map