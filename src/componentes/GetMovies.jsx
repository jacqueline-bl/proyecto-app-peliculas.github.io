
import React, { useEffect, useState } from "react";
import axios from "axios";

function GetMovies() {

  const apiUrl ='https://api.themoviedb.org/3';
  const apiKey = '0ad2d5fa46b34d4feae3798059660585';
  const imgPath = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({title:"Cargando película"});
 

 /*  
  import YouTube from "react-youtube";
 const [searchKey, setSearchKey] = useState('');
  const [play, setPlay] = useState(false); 
  const [trailer, setTrailer] = useState(null);
   
*/
  
  

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? 'search' : 'discover';
    try {
      const { data: { results } } = await axios.get(`${apiUrl}/${type}/movie`, {
        params: {
          api_key: apiKey,
          query: searchKey,
        },
      });
      setMovies(results);
      setMovie(results[0]);
    } catch (error) {
      console.error('Error ', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    
    
      <div className="MovieZone">

        {movies.map((movie) => (

          <div key={movie.id} className="MovieCard">

            <div className="MovieTitle">{movie.title}</div>

            <img className="MovieImg" src={`${imgPath}${movie.poster_path}`} alt={movie.title} />

          </div>
        ))}
      </div>
    
  );
}

export default GetMovies;


