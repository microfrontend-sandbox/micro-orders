import { Order, OrderResult, OrdersResult } from './types/Order';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './types/Store';
import { getOrder, getOrders } from './api/orderApi';

interface State {
  orders: OrderState;
}

interface OrderState {
  orders: Order[];
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  error: null
};

const orders = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getOrdersSuccess (state, { payload }: PayloadAction<OrdersResult>) {
      state.orders = payload.orders;
      state.error = null;
    },
    getOrdersFailure (state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
    getOrderSuccess (state, { payload }: PayloadAction<OrderResult>) {
      const orders = state.orders.filter(order => order.id !== payload.order.id);
      state.orders = [...orders, payload.order];

      state.error = null;
    }
  }
});

export const {
  getOrdersSuccess,
  getOrdersFailure,
  getOrderSuccess
} = orders.actions;

export default orders;

export const selectOrders = (state: State) => state.orders;
export const selectOrderById = (id: number) => createSelector(
  [selectOrders],
  ({ orders }) => orders.find(order => order.id === id)
);

export const fetchOrders = (): AppThunk => async dispatch => {
  try {
    const orders = await getOrders();
    dispatch(getOrdersSuccess({ orders }));
  } catch (error) {
    dispatch(getOrdersFailure(error.toString()));
  }
}

export const fetchOrderById = (id: number): AppThunk => async dispatch => {
  try {
    const order = await getOrder(id);
    dispatch(getOrderSuccess({ order }));
  } catch (error) {
    dispatch(getOrdersFailure(error.toString()));
  }
}