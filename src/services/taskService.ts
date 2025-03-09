import TaskModel from '../models/tasksModel';
import mongoose, { Document } from 'mongoose';

// 1. Create Task
export const createTask = async (taskData: {
  description: string;
  completed: boolean;
  sortNumber: number;
  owner: string;
}) => {
  try {
    const task = new TaskModel(taskData);
    return await task.save();
  } catch (error) {
    throw new Error('Error creating task: ' + error);
  }
};

// 2. Get Task List
export const getTaskList = async () => {
  try {
    const tasks = await TaskModel.find().sort({ sortNumber: 1 });
    return tasks;
  } catch (error) {
    throw new Error('Error fetching tasks: ' + error);
  }
};

// 3. Delete Task
export const deleteTask = async (taskId: string) => {
  try {
    const task = await TaskModel.findByIdAndDelete(taskId);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw new Error('Error deleting task: ' + error);
  }
};

// 4. Get Sorted List of Tasks
export const getSortedTaskList = async () => {
  try {
    const tasks = await TaskModel.find().sort({ sortNumber: 1 }); // ascending order
    return tasks;
  } catch (error) {
    throw new Error('Error fetching sorted tasks: ' + error);
  }
};

// 5. Update Task
export const updateTask = async (taskId: string, taskData: {
  description?: string;
  completed?: boolean;
  sortNumber?: number;
  owner?: string;
}) => {
  try {
    const task = await TaskModel.findByIdAndUpdate(taskId, taskData, { new: true });
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw new Error('Error updating task: ' + error);
  }
};


// 6. update sortNumber
export const updateSortNumber = async (tasks: {
  id: string;
  sortNumber: number;
}[]) => {
  try {
    const promises = tasks.map(async (task) => {
      await TaskModel.findByIdAndUpdate(
        new mongoose.Types.ObjectId(task.id), 
       { sortNumber: task.sortNumber });
    }
    );
    
    await Promise.all(promises);

    return 'SortNumber updated';

  } catch (error) {
    throw new Error('Error updating sortNumber: ' + error);
  }
}

