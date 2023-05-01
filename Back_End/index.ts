import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import CategoryRoutes from "./Routes/CategoryRoutes";
import { connectDB } from "./config/mongoDB";
import upload from "./middlewares/upload";
import cloudinary from "./utils/cloudinary";
import ProductRoutes from "./Routes/ProductRoutes";
import OrderRoutes from "./Routes/OrderRoutes";
import supplierRoutes from "./routes/supplierRoutes";
import cartListRoutes from "./Routes/cartListRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("image"), async (req: Request, res: Response) => {
  console.log("REQ:", req.file);
  const result = await cloudinary.v2.uploader.upload(req?.file?.path || "image", { folder: "E.RENT" });
  res.status(200).json({ message: "Амжилттай хадгаллаа.", imgUrl: result.secure_url });
});

app.get("/", (req: Request, res: Response) => {
  res.send("TEST-API");
});

app.use("/uploads", express.static("uploads"));

// connect Routes
app.use("/categories", CategoryRoutes);
app.use("/products", ProductRoutes);
app.use("/orders", OrderRoutes);

const MONGO_URI = process.env.MONGO || "";
connectDB(MONGO_URI);

app.listen(9000, () => {
  console.log(`Server is runnig at ${9000} port`);
});
