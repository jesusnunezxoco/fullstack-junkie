import mongoose from "mongoose"
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("MongoDB connected...")
  }
  catch(error) {
    console.log("Error connecting to MongoDB:", error)
    process.exit(1)
  }
}

export default connectDB