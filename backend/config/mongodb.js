import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected.....!!");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce-pt`);
  } catch (error) {
    console.log("DB connection error:", error);
  }
};
export default connectDB;
