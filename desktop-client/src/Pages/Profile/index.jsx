import { useParams } from 'react-router-dom';

// fake api
import { feed } from '../../coverage/fakeapi';
import { getUser } from '../../Helpers/userHelper';

import Feed from '../../Components/Feed';
import Card from '../../Components/Card';

const Profile = (props) => {
  const {userID} = useParams()
  
    let profileUser = getUser(userID).data
    props.setTitle(`${profileUser.firstName} ${profileUser.lastName}'s Profile`)
    return (
    <div className='flex-col'>

      {/* top shelf */}
      <div className='flex-row'>
        <Card header={
          <div>
          <div>
            <img src={profileUser.img} alt={`${profileUser.firstName} ${profileUser.lastName}`} />
          </div>
          <div>
            {`${profileUser.firstName} ${profileUser.lastName}'s Profile`}
          </div>
          </div>
            } footer={profileUser.userId} width='100%'>
        <pre>
          {JSON.stringify(profileUser, null, 2)}
        </pre>
        </Card>
      </div>

      {/* bottom shelf */}
      <div className='flex-row'>
        <div className='flex-col' style={{ paddingRight: 'var(--margin)' }}>
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


export default Profile