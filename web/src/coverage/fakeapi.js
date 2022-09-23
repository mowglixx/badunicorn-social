// this lib is for testing/planning only

import { v4 as UUIDV4 } from 'uuid'
import {feed as mockFeed} from './mockFeed'

export const user = {
    name: 'John Doe',
    dateOfBirth: {
        day: 2,
        month: 10,
        year: 1989
    },
    profileImage: 'https://via.placeholder.com/50x50/222222/ffffff?text=X',

}

export const post = {
    id: UUIDV4(),
    author: {
        name: user.name,
        img: user.profileImage,
    },
    content: 'lorem ipsum dolce et mirus dante rolet mura',
    datePosted: '10 Seconds ago'
}

export const feed = mockFeed