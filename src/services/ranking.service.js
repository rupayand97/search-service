function rankProducts(products, query) {
  return products
    .map(product => {
      let score = 0;

      const q = query.toLowerCase();

      if (product.title.toLowerCase().includes(q)) score += 5;
      if (product.description.toLowerCase().includes(q)) score += 3;

      score += product.rating || 0;

      if (product.stock > 0) score += 2;
      else score -= 5;

      score += 1 / (product.price || 1);

      return { ...product, score };
    })
    .sort((a, b) => b.score - a.score);
}

module.exports = {
  rankProducts
};