import products from "../data/products.json";

export const getProductsByCategory = (categoryId) => {
  return products.filter(
    (product) => product.category_id === parseInt(categoryId)
  );
};
