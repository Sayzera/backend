"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config/config");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
// MongoDB'ye bağlan
(0, config_1.connectDB)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/task', taskRoutes_1.default);
app.get("/", (req, res) => {
    res.json({ message: `
      Merhaba, ben Sezer. Bu uygulama MERN Stack ile geliştirilmiştir.
      Uygulama içerisinde kullanıcı kaydı oluşturabilir, giriş yapabilir ve task ekleyebilirsiniz.
    ` });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map