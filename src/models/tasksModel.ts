import mongoose, { Document, Schema } from "mongoose";

interface Task extends Document {
  description: string;
  completed: boolean;
  sortNumber: number;
  owner: mongoose.Schema.Types.ObjectId;
}

const taskSchema: Schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  sortNumber: {
    type: Number,
    default: 0,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // User modeline referans
    required: true,
  },
}, {
  timestamps: true, // createdAt ve updatedAt otomatik olarak eklenecek
});

const TaskModel = mongoose.model<Task>("Task", taskSchema);

export default TaskModel;
