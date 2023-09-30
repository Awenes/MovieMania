import React, { useEffect, useState } from 'react'
import './App.css'
import {FaSearch} from 'react-icons/fa'
import MovieCard from './components/MovieCard'

const API_URL ='https://www.omdbapi.com?apikey=87056f8c'

const movie1 = {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="spp">
      <center>
          <h1>MovieMania</h1>
        <div className="search">
          <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
          <FaSearch 
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {
          movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard 
                movie={movie}
                />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )
        }
        
      </center>
      
    </div>
  )
}

export default App
