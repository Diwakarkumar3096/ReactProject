import React from "react";
import Product from "./Product.js";
import Form from "./Form.js";
const ProductList = (props) => {
  const { ProductArray } = props;
  console.log(ProductArray);
  return (
    <div>
      {ProductArray.map((product, i) => (
        <Product product={product} key={i} />
      ))}
      <div>
        <Form />
      </div>
    </div>
  );
};

export default ProductList;
