import React from 'react';
import { Link, useHistory } from "react-router-dom";

export const OrderSummary = () => {
  const { location } = useHistory();

  return <>
    <h1>Orders</h1>
    <p>Please select an order to view details:</p>
    <ul>
      <li>
        <Link to={`${location.pathname}/123`}>123</Link>
      </li>
    </ul>
  </>;
};