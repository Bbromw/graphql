import logo from './logo.svg'
import './App.css'
import { gql, useQuery } from "@apollo/client"

function App() {
  const GET_MOVIES = gql`
  query getMovie{
  Movies{
    imdbID
    Title
    info{
      Title
      Year
      Released
      Runtime
      Genre
    }
  }
}
  `

  const { data } = useQuery(GET_MOVIES)

  const movieRender = () => {
    return data.Movies.map(({ Title, imdbID, info }) => (
      <div key={imdbID} style={{ display: "inline-block", width: "200px", marginLeft: "10px", verticalAlign: "top", backgroundColor: "lightblue", padding: "0px 5px" }}>
        <h1>{Title}</h1>
        <div>
          <p>{info.Year}</p>
          <p>{info.Released}</p>
          <p>{info.Runtime}</p>
          <p>{info.Genre}</p>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <h1>Movies</h1>
      {data && movieRender()}
    </div>
  )
}

export default App
