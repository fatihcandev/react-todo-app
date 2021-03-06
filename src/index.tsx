import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';

import { ContextProvider } from './context';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
