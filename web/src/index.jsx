/*
*
*   Badunicorn Social frontend web client
*   Dan Monaghan (mowglixx)
*
*/

// Dependancies
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// create the virtual DOM root
const appRoot = ReactDOM.createRoot(document.getElementById('appRoot'))
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

