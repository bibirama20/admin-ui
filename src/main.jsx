import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App2 from './App2.jsx'
import { ThemeContextProvider } from './context/themeContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App2/>
    </ThemeContextProvider>
  </React.StrictMode>
);
