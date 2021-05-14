import "dotenv/config.js"
import express from "express"
import connectDB from "./config/db.js"
connectDB()
const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json())
import productRoutes from "./routes/products.js"
app.use("/api/products", productRoutes)

app.get("/", (req, res) => {
  res.send("Hey")
})

app.listen(PORT, () => console.log(`Mern Commerce server running on port ${PORT}`))