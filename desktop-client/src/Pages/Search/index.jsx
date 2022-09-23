import React from 'react'
import { useParams } from 'react-router-dom'

const Search = (props) => {
  const {q} = useParams()
  props.setTitle(q?`Search "${q.trim()}"`:'Search')
  return (
  <>{ q ?
    <div>Search - {q.trim()}</div>
  : <div>
      Please enter a search query...
    </div>
    }
  </>)
}

export default Search