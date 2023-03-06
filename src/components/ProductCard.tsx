import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../query/product-query";

const ProductCard: React.FC<Product> = ({ id, title, description }) => {
  return (
    <Link key={id} to={`/product/${id}`}>
      <div key={id}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};
export default ProductCard;
