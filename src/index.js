import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  allReducers  from './redux/reducers/index'
import { createStore } from 'redux';

const codeStore = createStore(allReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={codeStore}>
        <App />
    </Provider>
  </React.StrictMode>
);