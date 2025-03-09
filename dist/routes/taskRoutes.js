"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
router.post("/tasks", authMiddleware_1.default, taskController_1.createTaskHandler);
router.get("/tasks", authMiddleware_1.default, taskController_1.getTaskListHandler);
router.delete("/tasks/:taskId", authMiddleware_1.default, taskController_1.deleteTaskHandler);
router.get("/tasks/sorted", authMiddleware_1.default, taskController_1.getSortedTaskListHandler);
router.put("/tasks/:taskId", authMiddleware_1.default, taskController_1.updateTaskHandler);
router.post("/tasks/update-sort", authMiddleware_1.default, taskController_1.updateSortNumberHandler);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map