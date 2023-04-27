import { Request, Response } from "express";
import CartModel from "../models/CartItem";
import { Product } from "../models/Product";
// get all CartList
export const getAllCartList = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    console.log("UID", userId);
    const cartItem = await CartModel.find({ user: userId });
    console.log("UIDCL", cartItem);
    if (!cartItem) {
      return res.status(201).json({ message: "Карт хоосон байна." });
    }

    res.status(200).json({ message: "Бүх карт олдлоо.", cartItem });
  } catch (error: any) {
    res.status(400).json({
      message: "Картны мэдээлэл авахад алдаа гарлаа",
      error: error.message,
    });
  }
};

// add CartList
export const createCartList = async (req: Request, res: Response) => {
  try {
    const { pId, userId, qty }: any = req.body;
    const product: any = await Product.findById(pId);

    const p = {
      product,
      quantity: Number(qty),
      price: product.product_price * Number(qty),
    };

    const cartList = await CartModel.findOne({ user: userId });
    console.log(cartList);

    if (!cartList) {
      console.log("NEW", p);
      const totalPrice = p.price;
      const totalQuantity = p.quantity;
      console.log(totalPrice);
      console.log(totalQuantity);
      const newCartList = await CartModel.create({
        user: userId,
        productList: [p],
        totalPrice,
        totalQuantity,
      });
      res.status(201).json({ success: true, cartList: newCartList });
    } else {
      console.log("RENEW", p);
      cartList.productList.push(p);
      const newPrice = cartList.productList.reduce(
        (sum, el: any) => el.price + sum,
        0
      );
      const newQuantity = cartList.productList.reduce(
        (sum, el: any) => el.quantity + sum,
        0
      );
      cartList.totalPrice = newPrice;
      cartList.totalQuantity = newQuantity;
      const newCartList = await cartList.save();
      res.status(201).json({ success: true, cartList: newCartList });
    }
  } catch (error) {
    console.log("E", error);
  }
};

// update CartList

export const updateCartList = async (req: Request, res: Response) => {
  const { id } = req.params;
  //   console.log("params", req.params);
  const { userId, quantity } = req.body;
  //   console.log("body", req.body);
  try {
    const cartList = await CartModel.findOne({ user: userId });

    if (!cartList) {
      return res
        .status(404)
        .json({ message: "Хэрэглэгчийн карт олдохгүй байна." });
    }
    // console.log(cartList.productList);
    const index = cartList.productList.findIndex(
      (product: any) => product._id.toString() === id
    );
    console.log(index);

    if (index < 0) {
      // -1 > 0
      return res.status(404).json({ message: "Карт байхгүй байна." });
    }

    cartList.productList[index].quantity = Number(quantity);
    cartList.productList[index].price =
      cartList.productList[index].quantity! *
      cartList.productList[index].product.product_price;
    cartList.productList.set(index, cartList.productList[index]);
    console.log("CP", cartList);

    const newPrice = cartList.productList.reduce(
      (updateP, el: any) => el.price + updateP,
      0
    );
    const newQuantity = cartList.productList.reduce(
      (updateP, el: any) => el.quantity + updateP,
      0
    );

    console.log("NP", newPrice);
    console.log("NQ", newQuantity);

    cartList.totalPrice = newPrice;
    cartList.totalQuantity = newQuantity;
    const nCartList = await cartList.save();
    res.status(200).json({ message: "Карт updated", cartList: nCartList });
  } catch (error) {
    console.log("aldaanii medeelel", error);
  }
};

export const deleteCartItem = async (req: Request, res: Response) => {
  console.log(req.params);
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const cartList = await CartModel.findOne({ user: userId });
    if (!cartList) {
      return res
        .status(404)
        .json({ message: "Хэрэглэгчийн карт олдохгүй байна." });
    }

    const index = cartList.productList.findIndex(
      (product) => product.product._id == id
    );

    if (!index) {
      return res.status(404).json({ message: "Карт байхгүй байна." });
    }

    //olson index deerh product iig ustgana.
    console.log("IDX", id);

    cartList.productList.pull({
      _id: id,
    });
    console.log("CC", cartList);
    const newPrice = cartList.productList.reduce(
      (sum, el: any) => el.price + sum,
      0
    );
    const newQuantity = cartList.productList.reduce(
      (sum, el: any) => el.quantity + sum,
      0
    );

    cartList.totalPrice = newPrice;
    cartList.totalQuantity = newQuantity;
    const nCartList = await cartList.save();

    res.status(200).json({ success: true, cartList: nCartList });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Server error" });
  }
};
