import React from "react";
import ReactDOM from 'react-dom/client';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
  let app = document.getElementById("app");
  let root = ReactDOM.createRoot(app);
  root.render(<App/>);
});