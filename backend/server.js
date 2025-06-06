import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// App Config

const app = express();
const port = process.env.port || 4000;
connectDB();
connectCloudinary();
//Middlewares

app.use(express.json());
app.use(cors());

//API endpoits

app.get("/", (req, res) => {
  res.send("API working!!");
});

app.listen(port, () => {
  console.log(`Server is running on PORT:${port}`);
});
