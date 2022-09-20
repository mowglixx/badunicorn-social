import { PostButtons } from "./PostButtons"
import Card from './Card'

import {dateHelper} from '../Helpers/dateHelper'

const Feed = (props) => {
  return (
    <div className="feed">
      {props.feed 
      ? props.feed.map((post, i) => {
        return(
          <Card>


            <div className="flex-row">
            <div className="flex-col">
          <a href={`/profile/${post.author.userId}`}>
            <img className="card-image" src={post.author.img} alt={`${post.author.firstName} ${post.author.lastName}`} />
            </a>
            </div>
            <div className="flex-col">
          <a href={`/profile/${post.author.userId}`}>
            <h2 className="no-padding">{`${post.author.firstName} ${post.author.lastName}`}</h2>
            </a>
            <p className="no-padding postTimestampText" title="">{dateHelper(post.datePosted)}</p>
            </div>
            </div>
            <p className="postContentText">{post.content}</p>
            <PostButtons postId={post.id} />
          </Card>
        )
      })
      : <div className="surface">
      <h2 className="center-text">=/</h2>
      <h3 className="center-text">No posts yet...</h3>
      </div>
      }
    </div>
  )
}

export default Feed