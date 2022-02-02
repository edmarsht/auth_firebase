import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import {UserContextProvider} from "./context/userContext"

ReactDOM.render(
  <BrowserRouter>
  {/* UserContextProvider entoure App est donc l'ensemble de l'app, on va pouvoir donner des infos facilement partout */}
  <UserContextProvider>
    <App />
  </UserContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
