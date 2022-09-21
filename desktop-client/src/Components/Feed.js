import { PostButtons } from "./PostButtons"
import Card from './Card'
import './Feed.css'

import { dateHelper } from '../Helpers/dateHelper'

const Feed = (props) => {
  return (
    <div className="feed">
      {props.feed
        ? props.feed.map((post, i) => {
          const fullName = `${post.author.firstName} ${post.author.lastName}`
          return (
            <Card
              key={post.id.$oid}
              header={
                <div className="flex-row">
                  <a href={`/profile/${post.author.userId}`}>
                    <img className="card-image" src={post.author.img} alt={`${fullName}`} />
                  </a>
                  <div className="flex-col">
                    <a href={`/profile/${post.author.userId}`}>
                      <h2 className="no-padding">{`${fullName}`}</h2>
                    </a>
                    <p className="no-padding postTimestampText" title="">{dateHelper(post.datePosted)}</p>
                  </div>
                </div>}
              footer={
                <PostButtons postId={post.id} />
              }>
              <p className="postContentText">{post.content}</p>
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