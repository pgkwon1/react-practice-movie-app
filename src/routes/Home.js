import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovie] = useState([]);

  const getMovie = async () => {
    const movieResult = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    console.log(movieResult);

    setMovie(movieResult.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Movie</h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        movieList.map((movie, index) => (
          <Movie
            title={movie.title}
            runtime={movie.runtime}
            genres={movie.genres}
            id={movie.id}
            key={index}
          />
        ))
      )}
    </div>
  );
}

export default Home;
