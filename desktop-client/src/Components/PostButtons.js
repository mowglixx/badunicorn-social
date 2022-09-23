import Button from './Button'

// Helpers (API, icons)
import Icon from '@mdi/react'; //import icons lib
import { mdiThumbUp, mdiChat, mdiShare } from '@mdi/js'; // import required icons


export const PostButtons = ({ postId }) => {
    return (
        <div className='flex-row button-group'>
            <Button type='primary' clickEvent={() => {console.log(`liked post-${postId.$oid}`)}} icon={<Icon path={mdiThumbUp} size={0.75}/>}>Like</Button>
            <Button type='primary' clickEvent={() => {console.log(`comment button clicked on post-${postId.$oid}`)}} icon={<Icon path={mdiChat} size={0.75}/>}>Comment</Button>
            <Button type='primary' clickEvent={() => {console.log(`Shared post-${postId.$oid}`)}} icon={<Icon path={mdiShare} size={0.75}/>}>Share</Button>
        </div>
    )
}
