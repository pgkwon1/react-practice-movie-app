import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, runtime, genres, id, index }) {
  return (
    <div key={index}>
      Title: <Link to={`/detail/${id}`}>{title}</Link> - {runtime} Minutes{" "}
      <br />
      장르:&nbsp;
      {genres.map((data, index) => (
        <span key={index}>{data} </span>
      ))}
      <Link to={`/practice/${title}`}>LOVE</Link>
    </div>
  );
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  genres: PropTypes.array,
  id: PropTypes.number,
};
export default Movie;
