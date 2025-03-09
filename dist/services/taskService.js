"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSortNumber = exports.updateTask = exports.getSortedTaskList = exports.deleteTask = exports.getTaskList = exports.createTask = void 0;
const tasksModel_1 = __importDefault(require("../models/tasksModel"));
const mongoose_1 = __importDefault(require("mongoose"));
// 1. Create Task
const createTask = async (taskData) => {
    try {
        const task = new tasksModel_1.default(taskData);
        return await task.save();
    }
    catch (error) {
        throw new Error('Error creating task: ' + error);
    }
};
exports.createTask = createTask;
// 2. Get Task List
const getTaskList = async () => {
    try {
        const tasks = await tasksModel_1.default.find().sort({ sortNumber: 1 });
        return tasks;
    }
    catch (error) {
        throw new Error('Error fetching tasks: ' + error);
    }
};
exports.getTaskList = getTaskList;
// 3. Delete Task
const deleteTask = async (taskId) => {
    try {
        const task = await tasksModel_1.default.findByIdAndDelete(taskId);
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }
    catch (error) {
        throw new Error('Error deleting task: ' + error);
    }
};
exports.deleteTask = deleteTask;
// 4. Get Sorted List of Tasks
const getSortedTaskList = async () => {
    try {
        const tasks = await tasksModel_1.default.find().sort({ sortNumber: 1 }); // ascending order
        return tasks;
    }
    catch (error) {
        throw new Error('Error fetching sorted tasks: ' + error);
    }
};
exports.getSortedTaskList = getSortedTaskList;
// 5. Update Task
const updateTask = async (taskId, taskData) => {
    try {
        const task = await tasksModel_1.default.findByIdAndUpdate(taskId, taskData, { new: true });
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }
    catch (error) {
        throw new Error('Error updating task: ' + error);
    }
};
exports.updateTask = updateTask;
// 6. update sortNumber
const updateSortNumber = async (tasks) => {
    try {
        const promises = tasks.map(async (task) => {
            await tasksModel_1.default.findByIdAndUpdate(new mongoose_1.default.Types.ObjectId(task.id), { sortNumber: task.sortNumber });
        });
        await Promise.all(promises);
        return 'SortNumber updated';
    }
    catch (error) {
        throw new Error('Error updating sortNumber: ' + error);
    }
};
exports.updateSortNumber = updateSortNumber;
//# sourceMappingURL=taskService.js.map