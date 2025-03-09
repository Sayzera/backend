// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { verifyToken } from "../utils/jwtUtils";

const authMiddleware = (
  req: Request & {
    user: any;
  },
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token kısmını al

  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }

  // Token'ı doğrula

  if(!verifyToken(token)) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
  
  next();
};

export default authMiddleware;
