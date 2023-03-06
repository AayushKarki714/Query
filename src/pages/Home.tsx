import ProductCard from "../components/ProductCard";
import { useProductsQuery } from "../query/product-query";

function Home() {
  const { data, isLoading } = useProductsQuery();
  if (isLoading) return <h2>Loading..</h2>;
  return (
    <div>
      {data?.map(({ title, description, id }) => (
        <ProductCard key={id} id={id} title={title} description={description} />
      ))}
    </div>
  );
}

export default Home;
