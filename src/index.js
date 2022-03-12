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
import AboutUs from "./routes/aboutUsRoute";
import PrivacyPolicy from "./routes/privacyPolicyRoutes";
import TermAndCondition from "./routes/termsAndConditionRoutes ";
import Support from "./routes/supportRoutes";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route path="/item" element={<ItemRoute />} />
      <Route path="/item/men" element={<ItemMenRoute />} />
      <Route path="/item/women" element={<ItemWomenRoute />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/term-and-conditions" element={<TermAndCondition />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
