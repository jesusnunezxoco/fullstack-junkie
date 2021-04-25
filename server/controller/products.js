import Product from "../models/Product.js"

export const getAllProducts = async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch(err) {
    console.log(err)
    res.status(500).json({message: "Server Error"})
  }
}

export const getOneProduct = async(req, res) => {
  try {
    const id = req.params
    const products = await Product.findById(id);
    res.status(200).json(products)
  } catch(err) {
    console.log(err)
    res.status(500).json({message: "Server Error"})
  }
}