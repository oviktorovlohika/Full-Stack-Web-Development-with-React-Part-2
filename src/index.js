import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'));

reportWebVitals();
