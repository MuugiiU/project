import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    product_title: { type: String, required: true },
    product_price: { type: Number },
    product_img: [String],
    product_location: {
      type: {
        type: String,
        default: "Point",
      },
      coordinates: [Number],
    },
    product_rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    description: { type: String, required: true },
    rent_start_day: { type: Date, required: true },
    rent_finish_day: { type: Date, required: true },
    createadAtDate: { type: Date },
    updatedAtDate: { type: Date },
    deletedAtDate: { type: Date },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
Product.collection.createIndex({ product_location: "2dsphere" });

export { Product };
