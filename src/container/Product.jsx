import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Product() {
  const [product] = useState([
    { name: "Product1", id: 1 },
    { name: "Product 2", id: 2 },
    { name: "Product 3", id: 3 },

  ]);
  const navigate = useNavigate();

  const handleProduct = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      <h1>this ECOM </h1>
      {
        product.map(
            (p) => {
                return (
                    <div onClick={() => handleProduct(p.id)}>
                        {p.name}
                    </div>
                )
            }
        )
      }
    </div>
  );
}
