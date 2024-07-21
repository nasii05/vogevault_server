import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { connectDB } from "./database/connect";
import productRoutes from "./routes/product.route";

const app = express();
const port = 3000;

connectDB();
app.use(bodyParser.json());
app.use('/api/products', productRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("hello,  typescript with express");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
