import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './history'

const store = createStore(rootReducer, compose(applyMiddleware(
    thunk
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const data = JSON.parse(localStorage.getItem('favorite'))
localStorage.setItem('favorite', JSON.stringify(data || []))

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render( <Router history={history}>{app}</Router>, document.getElementById('root'));

reportWebVitals();
