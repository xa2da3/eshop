import axiosConfig from "../../app/axiosConfig";
import { Product } from "../../types/product";

const getProducts = async () => {
  const response = await axiosConfig.get("printful/store/products");

  return response.data.result;
};
const getSingleProduct = async (id: number) => {
  const response = await axiosConfig.get(`printful/store/products/${id}`);
  console.log("This is single product response", response.data.result.sync_product.thumbnail_url)
  return response.data.result;

 
};

const getCategory = async (category: string) => {
  const products = await getProducts();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(category.toLowerCase())
  );
  return filteredProducts;
};

const searchProducts = async (query: string) => {
  const products = await getProducts();
  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("Hello Guys", filteredProducts)
  return filteredProducts;
};

const productService = {
  getProducts,
  getSingleProduct,
  getCategory,
  searchProducts,
};

export default productService;
