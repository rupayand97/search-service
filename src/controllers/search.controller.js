const store = require("../datastore/inMemoryStore");
const rankingService = require("../services/ranking.service");

function searchProducts(req, res) {
  const query = req.query.query || "";

  const products = store.getAllProducts();
  const ranked = rankingService.rankProducts(products, query);

  res.json({
    data: ranked.map(p => ({
      productId: p.productId,
      title: p.title,
      description: p.description,
      mrp: p.mrp,
      Sellingprice: p.price,
      Metadata: p.metadata,
      stock: p.stock
    }))
  });
}

module.exports = {
  searchProducts
};