/*
*
*   Badunicorn Social frontend web client
*   Dan Monaghan (mowglixx)
*
*/

// Dependancies
import React from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter} from 'react-router-dom'

// Helpers (API, icons)
import Icon from '@mdi/react'; //import icons lib
import {mdiAccount} from '@mdi/js'; // import required icons

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
  <Layout>
  {/* <BrowserRouter> */}
  <Icon path={mdiAccount} size={1} />
    <Home />
    <Feed />
    <Messenger />
    <Photos />
    <Profile />
    <Search />
  {/* </BrowserRouter> */}
  </Layout>
  </React.StrictMode>
)

