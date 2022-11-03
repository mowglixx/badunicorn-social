import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../../Components/Card'

const Search = ({ setTitle }) => {
  const { q } = useParams()
  let searchQuery = q.trim() ? q.trim() : false
  setTitle(
    searchQuery
      ?
      `Search "${searchQuery}"`
      :
      'Search'
  )

  const [usersList, setUsersList] = useState([{
    "id": "string",
    "user": {
      "username": "string",
      "email": "hidden",
      "password": "hidden"
    }
  }])

  const fetchUsersList = (setUsersList) => {
    return fetch(`http://localhost:3001/auth?user=${searchQuery}`)
      .then(res => res.json())
      .then(json => {
        setUsersList(json.users)
        return console.table(json.users)
      })
  }

  useEffect(() => {
    console.log(usersList)
    fetchUsersList(setUsersList)
  }, [!!usersList, searchQuery])

  useEffect(() => console.table(usersList), [])

  return <SearchResults searchQuery={searchQuery} usersList={usersList} />
}

const SearchResults = ({ searchQuery, usersList }) => {

  if (usersList?.length) {
    return (
      <div className='flex-col'>
        <div className='flex-col'>
          Search {searchQuery && `- ${searchQuery}`}
        </div>
        {usersList.map(user => {
          return (
            <Card id={user.id} header={<Link as={'h2.card-header'} to={`/profile/${user.id}`}>{user.username}</Link>} key={user.id}>
            </Card>
          )
        })}
      </div>
    )
  } else if (searchQuery) {
    return (
      <div>
        No results found
      </div>
    )
  }
  return (
    <div>
      Please enter a search query...
    </div>
  )
}

export default Search