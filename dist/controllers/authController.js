"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.loginControl = exports.login = void 0;
const authService_1 = require("../services/authService");
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await (0, authService_1.loginUser)(email, password);
        res.json({ message: "Giriş başarılı", token });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.login = login;
const loginControl = async (req, res) => {
    try {
        const { token } = req.body;
        const user = await (0, authService_1.isLogin)({ token });
        res.json({ message: "Giriş yapılmış", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.loginControl = loginControl;
const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await (0, authService_1.registerUser)(username, password);
        res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu", user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.register = register;
//# sourceMappingURL=authController.js.map