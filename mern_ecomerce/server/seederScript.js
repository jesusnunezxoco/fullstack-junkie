import "dotenv/config.js"
import productsData from "./data/product.js"
import Product from "./models/Product.js"
import connectDB from "./config/db.js"

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({})
    await Product.insertMany(productsData)
    console.log("Data import success!")
    process.exit();
  }
  catch(err) {
    console.log("Error with data import", err)
    process.exit(1)
  }
};

importData(f)