import './main.css'

const Messenger = (props) => {
  props.setTitle('Messenger')
  return (
    <main>
      <div className="mainTop">
        "Discord"
      </div>
      <div className="mainBottom">

        <nav>
          <div className="topNav">
            <a href="">L</a>
            <a href="">L</a>
            <a href="">L</a>
          </div>
          <div className="bottomNav">
            <a href="">L</a>
          </div>
        </nav>
        <div className="second">
          <div className="topBar">Channels</div>
          <a className="pill" href="#"># general</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
          <a className="pill" href="#"># channel</a>
        </div>
        <div className="third">
          <div className="topBar">
            <div>#lorem-ipsum</div>
            <div>
              <a href="">D</a>
              <a href="">V</a>
              <a href="">U</a>
            </div>
          </div>
          <div className="thread">

          {/* Single Strand of conversation */}
            <div className="strand">
              <div className="strandHeader">
                <div className="strandHeaderImage"><img src="https://randomuser.me/api/portraits/men/43.jpg"
                  alt="" />
                </div>
                <a href="" className="strandHeaderUsername">John Smith</a>
              </div>
              <div className="strandBody">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, ad
                quisquam ratione cum sapiente tempore, at tenetur voluptate incidunt id ab dicta!
              </div>
            </div>

            <div className="conversationInput">
              <input className="conversationInputField" type="text" placeholder="Please enter a message..." />
            </div>
          </div>
          <div className="forth">
            <div className="topBar">
              <div>Members</div>
            </div>
          </div>

        </div>
        </div>
    </main>
  )
}

export default Messenger
