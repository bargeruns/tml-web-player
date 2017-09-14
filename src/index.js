import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import './index.css';
import App from './containers/app';
import webPlayer from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(webPlayer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
