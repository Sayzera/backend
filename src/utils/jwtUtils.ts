// src/utils/jwtUtils.ts
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, config.jwtSecret, { expiresIn: Number(config.jwtExpiration) });

};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, config.jwtSecret);
};