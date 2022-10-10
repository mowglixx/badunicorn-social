import { Link } from 'react-router-dom'
import Linkify from 'linkify-react';

import { PostButtons } from "./PostButtons"
import Card from './Card'
import './Feed.css'

import { dateHelper } from '../Helpers/dateHelper'
import { useEffect, useState } from 'react'

import { BRANDING } from '../App';

const Feed = (props) => {

  const [feed, setFeed] = useState(props.feed)

  useEffect(() => {
    if (!!props.userId) {
      setFeed(props.feed.filter((post => post.author.userId === props.userId)))
    }
    else {
      setFeed(props.feed)
    }
  }, [props.userId])

  const parseContentUrls = (content = '') => {
    const urlParser = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    let urls = content.find(urlParser, 3)
    return urls[0] !== content ? urls : []
  }

  return (
    <div className="feed">
      {feed
        ? feed.map((post, i) => {
          const fullName = `${post.author.firstName} ${post.author.lastName}`
          return (
            <Card
              key={post.id.$oid}
              header={
                <div className="flex-row">
                  <Link to={`/profile/${post.author.userId}#top`}>
                    <img className="card-image" src={post.author.img} alt={`${fullName}`} />
                  </Link>
                  <div className="flex-col">
                    <Link to={`/profile/${post.author.userId}#top`} >
                      <h2 className="card-heading">{`${fullName}`}</h2>
                    </Link>
                    <p className="no-padding postTimestampText" title="">{dateHelper(post.datePosted)}</p>
                  </div>
                </div>}
              footer={
                <div className='flex-col'>
                <Link to='#' onClick={() => { console.log('Clicked on post interactions for post-'+post.id.$oid) }} style={{textAlign: 'right', textDecoration: 'none'}}>
                Many Like, Such Comment
                </Link>
                <PostButtons postId={post.id} />
                </div>
              }>
              <Linkify
                as='p'
                className="postContentText"
                options={{
                  target: '_blank',
                  attributes: {
                    onClick: e => {
                      !confirm(`This link is from another place...\n\nAre you sure you trust it?\nPress OK to continue or Cancel to stay on ${BRANDING.brandName}`) && e.preventDefault()
                  }
                  }
                }
                }>
                {post.content}
              </Linkify>

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