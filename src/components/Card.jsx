import * as React from "react";
import { SingleProduct } from "./SingleProduct";

export function Card({ products }) {
  return (
    <div>
      {console.log(products, "888888888")}
      {products?.map((elem, index) => (
        <SingleProduct key={index} product={elem} />
      ))}
    </div>
  );
}
