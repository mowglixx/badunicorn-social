
const Layout = (props) => {
  return (
    <div {...props}>
    <nav>
      <ul></ul>
    </nav>
        {props.children}
    </div>
  )
}

export default Layout