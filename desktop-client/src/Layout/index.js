
const Layout = (props) => {
  return (
    <>
    <nav id="nav" title={props.brandName}>
    {props.links.map(link => {
      return(
        <a id="themeButton" class="nav-link" title={link.text} description={link.description} href={link.href}>
            {link.icon}
        </a>
      )
    })}
    </nav>
    <div className="main">
    {props.children}
    </div>
    </>
  )
}

export default Layout