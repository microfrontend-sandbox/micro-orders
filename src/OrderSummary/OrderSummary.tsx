import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, selectOrders } from '../orderSlice';

export const OrderSummary = () => {
  const dispatch = useDispatch();
  const {
    orders,
    error
  } = useSelector(selectOrders);
  const { location } = useHistory();

  console.log(location);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{error}</div>
      </div>
    )
  }

  return <>
    <h1>Orders</h1>
    <p>Please select an order to view details:</p>
    {orders.map(order => (
      <Link key={order.id} className="Link-item" to={`${location.pathname}/${order.id}`}>{order.id}</Link>
    ))}
  </>;
};