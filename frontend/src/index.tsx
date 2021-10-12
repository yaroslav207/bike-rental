import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import { Provider } from 'react-redux';
import './assets/css/styles.scss';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
