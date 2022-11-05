import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    // getMovie 함수 안에선 await으로 기다리긴 하지만 여기선
    // await으로 기다리지 않으므로
    // getMovie에서 리턴되는 프로미스를 then 으로 캐치해야함
    // movieResult엔 pending 프로미스 데이터가 할당댐
    getMovie().then((movieData) => {
      movieData && movieData.id ? setMovie(movieData) : setMovie({});
    });
  }, []);

  const getMovie = async () => {
    const movieResult = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    return movieResult.data.movie;
  };
  return (
    <div>
      <h1>Detail - Movie id {id}</h1>

      <h1>Title - {movie.title}</h1>
      <h2>Description - {movie.description_intro}</h2>
      <h3>{movie.runtime} min</h3>
    </div>
  );
}

export default Detail;
