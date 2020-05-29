import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { History } from 'history';

(window as any).renderOrders = (containerId: string, history: History) => {
  ReactDOM.render(
      <App history={history} />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
}

// if (process.env.REACT_APP_MICRO === 'true') {
// (window as any).renderOrders('root', window.history);
// }

(window as any).unmountOrders = (containerId: string) => ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element);
