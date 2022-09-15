/*
*
*   Badunicorn Social frontend web client
*   Dan Monaghan (mowglixx)
*
*/


// Dependancies
import React from 'react'
import ReactDOM from 'react-dom/client'

// Helpers (API, icons)

// Layout and styles for page
import Layout from './Layout'
import './index.css'

// Pages
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import Messenger from './Pages/Messenger'
import Photos from './Pages/Photos'
import Profile from './Pages/Profile'
import Search from './Pages/Search'

// create the virtual DOM root
const root = ReactDOM.createRoot(document.getElementById('root'))

// render the app
root.render(
  <React.StrictMode>
  <Layout className="dave">
    <Home />
    <Feed />
    <Messenger />
    <Photos />
    <Profile />
    <Search />
  </Layout>
  </React.StrictMode>
)

