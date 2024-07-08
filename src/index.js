import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CalculadoraScreen } from "./ui/screens/calculadora/calculadora.screen.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculadoraScreen />
  </React.StrictMode>
);
