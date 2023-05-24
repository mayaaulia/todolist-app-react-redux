import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// font style
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
// getting style from GlobalStyles.css
import './styles/GlobalStyles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
