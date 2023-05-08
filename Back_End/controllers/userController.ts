import { Request, Response } from "express";
import User from "../models/User";
const bcrypt = require("bcrypt");

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(201).json({ message: "Түрээслэгч байхгүй бай" });
    }
    res.status(200).json({ message: "Бүх түрээслэгч олдлоо", users });
  } catch (error: any) {
    res.status(400).json({
      message: "Түрээслэгч мэдээллийг авахад алдаа гарлаа",
      error: error.message,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const user = await User.findById({ id });
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    console.log("алдаа", error.message);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const {
    userName,
    userEmail,
    userPassword,
    phoneNumber,
    profileImg,
    address,
    cardNumber,
  } = req.body;

  if (!userName || !userEmail || !userPassword || !phoneNumber) {
    return res.status(400).json({ message: "Мэдээллийг бүрэн оруулна уу" });
  }
  const newUser = {
    userName,
    userEmail,
    userPassword,
    phoneNumber,
    profileImg,
    address,
    cardNumber,
  };
  try {
    const user = await User.create(newUser);
    console.log(user);
    res.status(201).json({ message: "Амжилттай үүслээ", user });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} түрээслэгч олдсонгүй` });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(400).json({ success: `${id} түрээслэгч олдсонгүй` });
    }
    res.status(201).json({
      message: `${id} өөрчлөгдлөө`,
      user,
    });
  } catch (error) {
    console.log("алдаа", error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} түрээслэгч олдсонгүй` });
  }
  try {
    const user = await User.findByIdAndDelete({ id });
    res.status(201).json({ message: `${id} түрээслэгч устлаа`, user });
  } catch (error) {
    console.log("алдаа", error);
  }
};
