// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/config';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import cors from 'cors'




dotenv.config();

// MongoDB'ye bağlan
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/task', taskRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
