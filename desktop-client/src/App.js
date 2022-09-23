/*
*
*   Badunicorn Social frontend web client
*   Dan Monaghan (mowglixx)
*
*/

// Dependancies
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// Helpers (API, icons)
import Icon from '@mdi/react'; //import icons lib
import { mdiAccount, mdiHome, mdiLogout, mdiMessage } from '@mdi/js'; // import required icons
// import { getUser } from './Helpers/userHelper';

// Layout and styles for page
import Layout from './Layout'

// Pages
import Home from './Pages/Home'
import Messenger from './Pages/Messenger'
import Photos from './Pages/Photos'
import Profile from './Pages/Profile'
import Search from './Pages/Search'

// Brand Vars
const BRANDING = {
  brandName: process.env.REACT_APP_BRAND_NAME || "Badunicorn Club",
}

const navLinks = [
  {
    text: "Home",
    description: 'Your homepage',
    href: "/",
    icon: <Icon path={mdiHome} size={1} />

  },
  {
    href: "/profile",
    text: "Profile",
    description: 'Check your personal profile',
    icon: <Icon path={mdiAccount} size={1} />
  },
  {
    href: "/messenger",
    text: "Messages",
    description: 'Check your messages',
    icon: <Icon path={mdiMessage} size={1} />
  },
  {
    href: "/logout",
    text: "Logout",
    description: 'Log out of your account',
    icon: <Icon path={mdiLogout} size={1} />
  }
]

// 
const App = () => {
  // darkMode state
  const [darkMode, setDarkMode] = useState(false)

  const [userLoggedIn, setUserLogin] = useState({})

  const [pageTitle, setPageTitle] = useState()
  const setBrandedTitle = title => {
    setPageTitle(`${title &&`${title} - `}${BRANDING.brandName}`)
  }

  // darkMode Toggle
  useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }, [darkMode])

  // document title
  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

  // render the app
  return (
    <Router>
    <Layout links={navLinks} brandName={BRANDING.brandName} darkMode={darkMode} setDarkMode={setDarkMode} userLoggedIn={userLoggedIn} login={setUserLogin}>
        
        <Switch>
          {/* Profile  */}
          <Route path={'/profile/:userID'}>
            <Profile setTitle={setBrandedTitle} />
          </Route>
          <Route path={'/profile'}>
            <Redirect to={userLoggedIn.userId?`/profile/${userLoggedIn.userId}`:'/'} />
          </Route>
          <Route path='/search/:q'>
            <Search setTitle={setBrandedTitle} />
          </Route>
          <Route path='/search'>
            <Search setTitle={setBrandedTitle} />
          </Route>
          <Route path='/messenger'>
            <Messenger setTitle={setBrandedTitle} />
          </Route>
          <Route path='/profile/:userID/photos'>
            <Photos setTitle={setBrandedTitle} />
          </Route>
          <Route path='/logout'>
            <Redirect to='/' />
          </Route>
          <Route path={['/', '*']}>
            <Home setTitle={setBrandedTitle} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App