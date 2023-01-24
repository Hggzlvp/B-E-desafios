import express, { json, urlencoded } from "express";
import productRoute from "./routes/products.router.js";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/productos", productRoute);

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));