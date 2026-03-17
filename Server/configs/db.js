import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/quickshow");
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;