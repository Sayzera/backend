import { Request, Response } from "express";
import { isLogin, loginUser, registerUser } from "../services/authService";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.json({ message: "Giriş başarılı", token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const loginControl = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    const user = await isLogin({ token });
    res.json({ message: "Giriş yapılmış", user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await registerUser(username, password);
    res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu", user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
