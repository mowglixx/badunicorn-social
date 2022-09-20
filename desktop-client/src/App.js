/*
*
*   Badunicorn Social frontend web client
*   Dan Monaghan (mowglixx)
*
*/

// Dependancies
import React, { useEffect, useState } from 'react'
// import {BrowserRouter} from 'react-router-dom'

// Helpers (API, icons)
import Icon from '@mdi/react'; //import icons lib
import { mdiAccount, mdiHome, mdiLogout, mdiMessage } from '@mdi/js'; // import required icons

// Layout and styles for page
import Layout from './Layout'
import './index.css'

// Pages
import Home from './Pages/Home'
// import Feed from './Pages/Feed'
// import Messenger from './Pages/Messenger'
// import Photos from './Pages/Photos'
// import Profile from './Pages/Profile'
// import Search from './Pages/Search'
// import Card from './Components/Card';

// Brand Vars
const BRANDING = {
  brandName: process.env.REACT_APP_BRAND_NAME || "Badunicorn Club",
}

const navLinks = [
  {
    text: "Home",
    description: 'Your homepage',
    href: "https://google.com/",
    icon: <Icon path={mdiHome} size={1} />
    
  },
  {
    href: "https://google.com/",
    text: "Profile",
    description: 'Check your personal profile',
    icon: <Icon path={mdiAccount} size={1} />
  },
  {
    href: "https://google.com/",
    text: "Messages",
    description: 'Check your messages',
    icon: <Icon path={mdiMessage} size={1} />
  },
  {
    href: "https://google.com/",
    text: "Logout",
    description: 'Log out of your account',
    icon: <Icon path={mdiLogout} size={1} />
  },
]

// render the app
const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark')
  }, [darkMode])

    return (
    <Layout links={navLinks} brandName={BRANDING.brandName}>
      {/* <BrowserRouter> */}
        <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* </BrowserRouter> */}
    </Layout>)
}

export default App