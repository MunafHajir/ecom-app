import React, { Component, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { product_id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(( ) => {
    fetch(`https://fakestoreapi.com/products/${product_id}`)
    .then(res=>res.json())
    .then(json=> setDetails(json))
  }, [])

  return <div>
    <h1>Title: {details.title} </h1>
    <h2>Price: {details.price} </h2>
    <img src={details.image}/>
    <button>Purchase</button>
  </div>;
};

export default ProductDetails;
