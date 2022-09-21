import Button from '../Components/Button'

// Helpers (API, icons)
import Icon from '@mdi/react'; //import icons lib
import {mdiMoonWaxingCrescent } from '@mdi/js'; // import required icons


import './css/fonts.css'
import './css/variables.css'
import './css/base.css'
import './css/flexUtilities.css'
import './css/typography.css'
import './css/positioning.css'
import './css/colors.css'
import './css/navigation.css'



const Layout = (props) => {
  return (
    <>
      <nav
        id="nav"
        title={props.brandName}>
        <div className={'flex-col'}>

        {props.links.map(link => {
          return (
            <a key={link.text}
              className="nav-link"
              title={link.text}
              description={link.description}
              href={link.href}
              >
              {link.icon}
              </a>
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
        </div>
      </nav>
      <div className="main">
        {props.children}
      </div>
    </>
  )
}

export default Layout