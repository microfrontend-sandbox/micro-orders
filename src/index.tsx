import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { History } from 'history';
import orderSlice from './orderSlice';
import { InjectableStore } from './types/Store';
import { Provider } from 'react-redux';

export let store: InjectableStore;
export let config: any;

(window as any).renderOrders = (containerId: string, history: History, injectedStore: InjectableStore, injectedConfig: any) => {
  store = injectedStore;
  config = injectedConfig;

  store.injectReducer(orderSlice.name, orderSlice.reducer);

  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById(containerId)
  );

  serviceWorker.unregister();
}

// if (process.env.REACT_APP_MICRO === 'true') {
// (window as any).renderOrders('root', window.history);
// }

(window as any).unmountOrders = (containerId: string) => ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element);
