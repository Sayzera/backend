"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSortNumberHandler = exports.updateTaskHandler = exports.getSortedTaskListHandler = exports.deleteTaskHandler = exports.getTaskListHandler = exports.createTaskHandler = void 0;
const taskService_1 = require("../services/taskService");
// 1. Create Task
const createTaskHandler = async (req, res) => {
    try {
        const taskData = req.body;
        const newTask = await (0, taskService_1.createTask)(taskData);
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createTaskHandler = createTaskHandler;
// 2. Get Task List
const getTaskListHandler = async (req, res) => {
    try {
        const tasks = await (0, taskService_1.getTaskList)();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getTaskListHandler = getTaskListHandler;
// 3. Delete Task
const deleteTaskHandler = async (req, res) => {
    const { taskId } = req.params;
    try {
        const deletedTask = await (0, taskService_1.deleteTask)(taskId);
        res.status(200).json(deletedTask);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteTaskHandler = deleteTaskHandler;
// 4. Get Sorted List of Tasks
const getSortedTaskListHandler = async (req, res) => {
    try {
        const sortedTasks = await (0, taskService_1.getSortedTaskList)();
        res.status(200).json(sortedTasks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getSortedTaskListHandler = getSortedTaskListHandler;
// 5. Update Task
const updateTaskHandler = async (req, res) => {
    const { taskId } = req.params;
    const taskData = req.body;
    try {
        const updatedTask = await (0, taskService_1.updateTask)(taskId, taskData);
        res.status(200).json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateTaskHandler = updateTaskHandler;
// 6 Update Sort Number 
const updateSortNumberHandler = async (req, res) => {
    const tasks = req.body;
    try {
        const updatedTask = await (0, taskService_1.updateSortNumber)(tasks);
        res.status(200).json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateSortNumberHandler = updateSortNumberHandler;
//# sourceMappingURL=taskController.js.map