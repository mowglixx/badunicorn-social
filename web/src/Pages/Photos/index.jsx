import { useParams } from "react-router-dom"
import { getUser } from '../../Helpers/userHelper'

const Photos = () => {
  const {userID} = useParams()
  const user = getUser(userID).data.author
  return (
    <>
      <div>
        {`${user.firstName} ${user.lastName}`} - Photos
      </div>
    </>
    )
  }
  
  export default Photos