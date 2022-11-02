// Ponto de entrada da aplicação
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App'

// O metodo render de React se encarrega da renderização do App.js
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)