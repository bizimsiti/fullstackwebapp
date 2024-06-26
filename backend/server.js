import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
const port = process.env.PORT;

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// db connect
connectDB();

// api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
