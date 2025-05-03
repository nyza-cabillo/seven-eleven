import productModel from "../models/productModel.js";
import fs from "fs";

//add product item

const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const product = new productModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    Image: image_filename,
    category: req.body.category,
  });
  try {
    await product.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding product" });
  }
};

//all food list

const listProducts = async (req, res) => {};

export { addProduct, listProducts };
