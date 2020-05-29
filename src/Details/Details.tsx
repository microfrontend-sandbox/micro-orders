import React from 'react';
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

export const OrderDetails = () => {
  const { params } = useRouteMatch();
  return <>
    <h2>Order ID: {params.orderId}</h2>
    <Link to={`/products/${params.orderId}`}>Go to Product</Link>
  </>;
}