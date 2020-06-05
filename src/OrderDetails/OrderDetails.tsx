import React, { FC, useEffect } from 'react';
import { RouteComponentProps, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderById, selectOrderById } from '../orderSlice';
import { Product } from '../types/Order';

interface OrderProps {
  orderId: string;
}

export const OrderDetails: FC<RouteComponentProps<OrderProps>> = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch();
  const orderId = Number(params.orderId);
  const order: any = useSelector(selectOrderById(orderId));

  useEffect(() => {
    dispatch(fetchOrderById(orderId));
  }, [dispatch, orderId]);

  return <>
    {order && <>
        <h2>Order Number: {order.id}</h2>
        <h3>Products</h3>
      {order.products.map((product: Product) => (
        <Link key={product.id} className="Link-item" to={`/products/${product.id}`}>{product.name}</Link>
      ))}
    </>}
  </>;
}