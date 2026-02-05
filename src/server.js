const express = require("express");

const productRoutes = require("./routes/product.routes");
const searchRoutes = require("./routes/search.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("OK");
});

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/search", searchRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
