const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// CONNECT DATABASE
// mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("MongoDB is connected"))
  .catch(() => console.log("MongoDB is NOT connected"));

app.get("/", async (req, res) => {
  res.json("app is running");
});

//=========== ROUTES ==========
const Admin = require("./router/admin");
const Products = require("./router/products");

//=========== ENTPOINTS ==========
app.use("/admins", Admin);
app.use("/products", Products);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`${PORT} is listened`));
