import { Request, Response } from "express";
import { Product } from "../models/Product";
// get all products

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().populate("category");
    if (!products) {
      return res.status(201).json({ message: "Бараа хоосон байна." });
    }
    res.status(200).json({ message: "Бүх бараа олдлоо", products });
  } catch (error: any) {
    res.status(400).json({
      message: "Барааны мэдээллийг авахад алдаа гарлаа",
      error: error.message,
    });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const product = await Product.findById({ id });
    res.status(200).json({ success: true, product });
  } catch (error: any) {
    console.log("Алдааны мэдээлэл", error.message);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const newProduct = req.body;

  try {
    const product = await Product.create(newProduct);
    res.status(200).json({ success: true, product });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (id) {
    res.status(400).json({ message: `${id}-тэй бүтээгдэхүүн олдсонгүй` });
  }
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!product) {
      res.status(400).json({ message: `${id}-бүтээгдэхүүн олдсонгүй` });
    }
    res.status(201).json({
      message: `${id}-тэй бүтээгдэхүүний мэдээлэл амжилттай солигдлоо`,
      product,
    });
  } catch (error) {
    console.log("Алдааны мэдээлэл"), error;
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй бүтээгдэхүүн олдсонгүй` });
  }
  try {
    const product = await Product.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: `${id}-тэй бүтээгдэхүүн устгагдлаа`, product });
  } catch (error) {
    console.log("Алдааны мэдээлэл", error);
  }
};