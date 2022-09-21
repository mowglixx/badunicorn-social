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

// Pages
// import Home from './Pages/Home'
// import Feed from './Pages/Feed'
// import Messenger from './Pages/Messenger'
// import Photos from './Pages/Photos'
import Profile from './Pages/Profile'
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
    href: "#",
    icon: <Icon path={mdiHome} size={1} />
    
  },
  {
    href: "#",
    text: "Profile",
    description: 'Check your personal profile',
    icon: <Icon path={mdiAccount} size={1} />
  },
  {
    href: "#",
    text: "Messages",
    description: 'Check your messages',
    icon: <Icon path={mdiMessage} size={1} />
  },
  {
    href: "#",
    text: "Logout",
    description: 'Log out of your account',
    icon: <Icon path={mdiLogout} size={1} />
  }
]

// 
const App = () => {
  // darkMode state
  const [darkMode, setDarkMode] = useState(false)

  // darkMode Toggle
  useEffect(() => {
    document.body.classList.toggle('dark')
  }, [darkMode])
  
  // document title
  useEffect(() => {
    document.title = "Chicken"
  }, [])
  
  // render the app
    return (
    <Layout links={navLinks} brandName={BRANDING.brandName} darkMode={darkMode} setDarkMode={setDarkMode}>
      {/* <BrowserRouter> */}
        {/* <Home/> */}
        <Profile />
      {/* </BrowserRouter> */}
    </Layout>)
}

export default App