import React from 'react'
import ReactDOM from 'react-dom/client'
// Bootstrap first so Tailwind utilities win on equal-specificity conflicts.
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
