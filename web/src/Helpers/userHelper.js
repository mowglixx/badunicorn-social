import { feed } from "../coverage/fakeapi"

export const getUser = (userID) => {
    return {
        data: feed.filter(user => user.author.userId === userID)[0] && feed.filter(user => user.author.userId === userID)[0].author
    }
}