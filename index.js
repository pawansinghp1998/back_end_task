const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
dotenv.config();

const port = process.env.PORT | 3000;

//connect to db
mongoose
  .connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected Successfully"))
  .catch((err) => {
    console.error(err);
  });

//Import routes
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");

//middlewares
app.use(express.json());
app.use(cors());

//route middleware
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);

app.listen(4000, () => {
  console.log(`Server up and running on port 4000....`);
});
