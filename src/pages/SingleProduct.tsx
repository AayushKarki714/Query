import { useProductQuery } from "../query/product-query";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const { data, isLoading } = useProductQuery(productId!);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
};

export default SingleProduct;
