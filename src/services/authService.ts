import UserModel from '../models/userModel'
import { generateToken, verifyToken } from '../utils/jwtUtils';

export const loginUser = async (username: string, password: string) => {
  const user = await UserModel.findOne({ username });
  if (!user) {
    throw new Error('Kullanıcı bulunamadı');
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error('Yanlış şifre');
  }

  // Token oluştur
  const token = generateToken({ id: user._id, username: user.username });
  return {
    token,
    id: user._id,
  };
};

export const registerUser = async (username: string, password: string) => {
  const existingUser = await UserModel.findOne({ username });
  if (existingUser) {
    throw new Error('Kullanıcı adı zaten alınmış');
  }

  const newUser = new UserModel({ username, password });
  await newUser.save();
  return newUser;
};

export const isLogin = async ({
  token,
}: {
  token: string;
}) => {

  const payload = verifyToken(token);
  const user = await UserModel.findById(payload.id);
  if (!user) {
    throw new Error('Kullanıcı bulunamadı');
  }
  return user;
};