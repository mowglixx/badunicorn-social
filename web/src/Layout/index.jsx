import {Link} from 'react-router-dom'


// Helpers (API, icons)
import Icon from '@mdi/react'; //import icons lib
import {mdiMoonWaxingCrescent, mdiCog } from '@mdi/js'; // import required icons
import { getUser } from '../Helpers/userHelper';


import './css/fonts.css'
import './css/variables.css'
import './css/base.css'
import './css/flexUtilities.css'
import './css/typography.css'
import './css/positioning.css'
import './css/colors.css'
import './css/navigation.css'
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Components/Button'


const Layout = (props) => {
  const topBarSearchForm = useRef()
  const history = useHistory()

  const handleSearch = (e) => {
    e.preventDefault()
    if(topBarSearchForm.current.value.trim()){
    history.push(`/search/${topBarSearchForm.current.value}`)
  }
  }
  
  return (
    <>
    <div className='top-bar flex-row flex-space-between'>
      <div className='flex-row'>
      <form onSubmit={handleSearch}>
        <input ref={topBarSearchForm} className='surface' type={'text'} placeholder='Search' />
      </form>
      </div>
      <div className='flex-row'>
      Logged in User Widget here
      </div>
    </div>
      <nav
        title={props.brandName}>
        <div className={'flex-col'}>

        {props.links.map(link => {
          return (
            <Link key={link.text}
              className="nav-link"
              title={link.text}
              description={link.description}
              to={link.href}
              >
              {link.icon}
              </Link>
          )
        })}
        </div>
        <div className={'flex-col'}>

        <Button
        type="nav-link"
        icon={<Icon path={mdiMoonWaxingCrescent} size={1}/>}
        clickEvent={() => {
          props.setDarkMode(!props.darkMode)
        }}
        title={'Toggle Theme'}
        description={'Switch between light mode and dark mode'} />
        <Button
        type="nav-link"
        icon={<Icon path={mdiCog} size={1}/>}
        clickEvent={() => {
          if(!props.userLoggedIn.userId){
            console.log('user logged in')
            props.login(getUser('f4782f49-aaf0-43ae-bb20-615aaf9e3cc7').data)
          }
          else{
            console.log('user logged out')
            props.login({})
          }
        }}
        title={'Toggle Login'}
        description={'Switch logged in status'} />
        </div>
      </nav>
      <div className="main flex-col">
        {props.children}
      </div>
    </>
  )
}

export default Layout