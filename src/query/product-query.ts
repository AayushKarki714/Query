import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
}
export type Products = ReadonlyArray<Product>;

const fetchProducts = async (): Promise<Products> => {
  const response = await axios.get("http://fakestoreapi.com/products");
  return response.data;
};

const fetchSingleProduct = async (id: string): Promise<Product> => {
  const response = await axios.get(`http://fakestoreapi.com/products/${id}`);
  return response.data;
};

export const useProductsQuery = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts });

export const useProductQuery = (productId: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["products", productId],
    queryFn: () => fetchSingleProduct(productId),
    initialData: () => {
      const allProducts = queryClient.getQueryData<Products>(["products"]);
      const findProductById = allProducts?.find(
        (product) => product.id === Number(productId)
      );
      console.log({ allProducts, productId, findProductById });
      return findProductById;
    },
  });
};
