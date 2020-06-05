import { Order } from '../types/Order';
import { config } from '../index';

export const getOrders = async (): Promise<Order[]> => {
  const { apiBase } = config;
  const url = `${apiBase}/orders`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getOrder = async (id: number): Promise<Order> => {
  const { apiBase } = config;
  const url = `${apiBase}/orders/${id}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};