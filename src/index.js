import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainRoute from "./routes/mainRoute";
import ItemRoute from "./routes/itemRoute";
import ItemMenRoute from "./routes/itemMenRoute";
import ItemWomenRoute from "./routes/itemWomenRoute";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route path="item" element={<ItemRoute />} />
      <Route path="item/men" element={<ItemMenRoute />} />
      <Route path="item/women" element={<ItemWomenRoute />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
