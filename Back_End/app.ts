import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
// import cors from "cors";

import connectDB from "./config/db";
import supplierRoutes from "./routes/supplierRoutes";

const app = express();
// app.use(cors());
app.use(express.json());

app.use("/suppliers", supplierRoutes);

const MONGO_URL = process.env.MONGO_URL || "";
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("hello erent");
});

connectDB(MONGO_URL);
app.listen(PORT, () => {
  console.log(`server ${PORT} deer aslaa.`);
});
