import { Request, Response } from 'express';
import {
  createTask,
  getTaskList,
  deleteTask,
  getSortedTaskList,
  updateTask,
  updateSortNumber,
} from '../services/taskService';

// 1. Create Task
export const createTaskHandler = async (req: Request, res: Response) => {
  try {
    const taskData = req.body;
    const newTask = await createTask(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get Task List
export const getTaskListHandler = async (req: Request, res: Response) => {
  try {
    const tasks = await getTaskList();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. Delete Task
export const deleteTaskHandler = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  try {
    const deletedTask = await deleteTask(taskId);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. Get Sorted List of Tasks
export const getSortedTaskListHandler = async (req: Request, res: Response) => {
  try {
    const sortedTasks = await getSortedTaskList();
    res.status(200).json(sortedTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 5. Update Task
export const updateTaskHandler = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const taskData = req.body;

  try {
    const updatedTask = await updateTask(taskId, taskData);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 6 Update Sort Number 
export const updateSortNumberHandler = async (req: Request, res: Response) => {
  const tasks= req.body;
  try {
    const updatedTask = await updateSortNumber(tasks as any);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

