import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const config = {
  jwtSecret: process.env.JWT_SECRET_KEY!,
  jwtExpiration: 1 * 24 * 60 * 60, 
};

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI );
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

export { connectDB, config };
