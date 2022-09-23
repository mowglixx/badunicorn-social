// fake api
import { feed } from '../../coverage/fakeapi';

import Feed from '../../Components/Feed';
import Card from '../../Components/Card';

const Home = (props) => {
  props.setTitle(`Home`)
  return (
    <div className='flex-col'>

      {/* top shelf */}
      <div className='flex-row'>
        <Card header='Home' width='100%'>
          Hey there
        </Card>
      </div>

      {/* bottom shelf */}
      <div className='flex-row'>
        <div
          className='flex-col'
          style={{
            paddingRight: 'var(--margin)'
          }}>
          <Card header='Interests'>
            Hey there
          </Card>
        </div>
        <div className='flex-col'>
          <Feed feed={feed} />
        </div>
      </div>
    </div>
  );
}

export default Home;
