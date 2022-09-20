import { feed } from '../../coverage/fakeapi';

import Button from '../../Components/Button'
import Feed from '../../Components/Feed';

const Home = (props) => {
  return (
    <div>
      <Button
        type="secondary"
        clickEvent={() => {
          props.setDarkMode(!props.darkMode)
        }}>
        Toggle Darkness
      </Button>
      <Feed feed={feed} />
    </div>
  );
}

export default Home;
