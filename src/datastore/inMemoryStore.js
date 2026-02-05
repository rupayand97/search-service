let products = [];
let currentId = 1;

function addProduct(product) {
  product.productId = currentId++;
  products.push(product);
  return product.productId;
}

function updateMetadata(productId, metadata) {
  const product = products.find(p => p.productId === productId);
  if (!product) return null;

  product.metadata = { ...product.metadata, ...metadata };
  return product;
}

function getAllProducts() {
  return products;
}

module.exports = {
  addProduct,
  updateMetadata,
  getAllProducts
};