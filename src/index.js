// Aqui ira codigo del servidor
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
// Variable de ambiente propia, por si desplejamos la app en un hosting toma esa direccion || 9000
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use("/api", userRoutes);
// Routes
app.get("/", (req, res) => {
  res.send("Wellcome to my API");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listing on port", port));
