import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    return fetch('http://localhost:3001/auth/list')
      .then(res => res.json())
      .then(json => {
        setUsersList(json.users)
        return console.table(json.users)
      })
  }

  useEffect(() => {
    console.log(usersList)
    fetchUsersList(setUsersList)
  }, [!!usersList])

  useEffect(() => console.table(usersList), [])

  return <SearchResults searchQuery={searchQuery} usersList={usersList} />
}

const SearchResults = ({ searchQuery, usersList }) => {

  const [results, setResult] = useState(usersList.filter(user => user.username === searchQuery))
  const updateResults = () => setResult(usersList.filter(user => user.username === searchQuery))

  useEffect(updateResults, [searchQuery])


  if (!!results) {
    return (
      <div className='flex-col'>
        <div className='flex-col'>
          Search {searchQuery && `- ${searchQuery}`}
        </div>
        {results.map(user => {
          return (
            <Card id={user.id} header={user.username} key={user.id}>
            </Card>
          )
        })}
      <div className='flex-col'>
        All Users:
        <ul>

          {
            usersList.map(user => {
              return (
                <li>
                  {user.id} = {user.username}
                </li>
              )
            })
          }
        </ul>
      </div>
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