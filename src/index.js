import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/Global/GlobalStyles';
import "./styles/Custom/customized.css";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

