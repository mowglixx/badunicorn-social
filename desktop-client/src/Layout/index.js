
const Layout = (props) => {
  return (
    <div {...props}>
    <nav>
    {process.env.REACT_APP_BRAND_NAME || "Badunicorn Social"}
      <ul>
        {props.links.map(link => {
          return (
            <a href={link.href}>{link.text}</a>
          )
        })}
      </ul>
    </nav>
        {props.children}
    </div>
  )
}

export default Layout