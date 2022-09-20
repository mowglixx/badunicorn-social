import Button from './Button'

export const PostButtons = ({ postId }) => {
    return (
        <div className='surface flex-row'>
            <Button>React</Button>
            <Button>Talk</Button>
            <Button>Share</Button>
        </div>
    )
}
