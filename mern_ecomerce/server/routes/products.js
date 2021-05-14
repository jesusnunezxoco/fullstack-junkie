import express from "express"
const router = express.Router()
import {getAllProducts, getOneProduct} from "../controller/products.js"

// @desc GET all products from db
// @route GET /api/products
// @access Public
router.get("/", getAllProducts)

// @desc GET a product from db
// @route GET /api/products/:id
// @access Public
router.get("/:id", getOneProduct)

export default router