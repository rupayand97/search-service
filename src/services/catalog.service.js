const store = require("../datastore/inMemoryStore");

function createProduct(data) {
  const product = {
    title: data.title,
    description: data.description,
    rating: data.rating,
    stock: data.stock,
    price: data.price,
    mrp: data.mrp,
    currency: data.currency,
    metadata: {}
  };

  return store.addProduct(product);
}

function updateProductMetadata(productId, metadata) {
  return store.updateMetadata(productId, metadata);
}

module.exports = {
  createProduct,
  updateProductMetadata
};