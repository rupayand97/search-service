const catalogService = require("../services/catalog.service");

function createProduct(req, res) {
  try {
    const productId = catalogService.createProduct(req.body);
    res.json({ productId });
  } catch (err) {
    res.status(400).json({ error: "Invalid product data" });
  }
}

function updateProductMetadata(req, res) {
  const { productId, Metadata } = req.body;

  const product = catalogService.updateProductMetadata(productId, Metadata);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json({
    productId,
    Metadata: product.metadata
  });
}

module.exports = {
  createProduct,
  updateProductMetadata
};
