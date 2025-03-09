"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtUtils_1 = require("../utils/jwtUtils");
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer token kısmını al
    if (!token) {
        return res.status(403).json({ message: "Token is required" });
    }
    // Token'ı doğrula
    if (!(0, jwtUtils_1.verifyToken)(token)) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
    next();
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map