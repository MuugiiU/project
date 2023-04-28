import Supplier from "../models/Supplier";
import { NextFunction, Request, Response } from "express";

const getSuppliers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await Supplier.find();
    res.status(200).json({ message: "Бүх түрээслүүлэгчдийн бүртгэл.", result });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Түрээслүүлэгчдийн  мэдээллийг авахад алдаа гарлаа." });
  }
};

const getSupplier = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} - тай түрээслүүлэгч олдсонгүй.` });
  }
  try {
    const supplier = await Supplier.findById(id);
    res
      .status(201)
      .json({ message: `${id} - тай түрээслүүлэгч олдлоо.`, supplier });
  } catch (err) {
    res
      .status(400)
      .json({ message: `${id} - тай түрээслүүлэгч авах гэтэл алдаа.` });
  }
};

const createSupplier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { supplier_name, supplier_address, supplier_phone, supplier_email } =
    req.body;

  if (
    !supplier_name ||
    !supplier_address ||
    !supplier_phone ||
    !supplier_email
  ) {
    res
      .status(400)
      .json({
        message: "Нэр, Имэйл, Утасны дугаар эсвэл Нууц үг байхгүй байна.",
      });
  }
  try {
    const supplier = await Supplier.create({
      supplier_name: req.body.supplier_name,
      supplier_address: req.body.supplier_address,
      supplier_phone: req.body.supplier_phone,
      supplier_email: req.body.supplier_email,
    });
    res
      .status(201)
      .json({ message: "Шинэ түрээслүүлэгч амжилттай бүртгэгдлээ.", supplier });
  } catch (err) {
    res
      .status(400)
      .json({ message: `Шинэ түрээслүүлэгч бүртгэх гэтэл алдаа.` });
  }
};

export { getSuppliers, getSupplier, createSupplier };
