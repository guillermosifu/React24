import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Router from './router/router.jsx'


import PrimerComponente from './MiComponente.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
