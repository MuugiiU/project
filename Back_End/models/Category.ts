import { Schema, model } from "mongoose";

const subCategorySchema = new Schema({
  sub_cat_title: {
    type: String,
    required: true,
  },

  sub_cat_desc: {
    type: String,
    required: true,
  },
  sub_cat_img: {
    type: String,
    required: true,
  },
});
const categorySchema = new Schema({
  category_title: {
    type: String,
    unique: true,
    required: true,
  },
  category_img: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  category_type: {
    type: String,
    unique: true,
    required: true,
  },
  category_slug: String,
  subCategories: [subCategorySchema],
});

const Category = model("Category", categorySchema);

export default Category;
