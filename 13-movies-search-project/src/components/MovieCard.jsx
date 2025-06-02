import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import NoPoster from "../assets/NoPoster.png";

function MovieCard({ Title, Year, imdbID, Type, Poster }) {
  return (
    <Link className={styles.movieCard} to={`/detail/${imdbID}`}>
      <img
        src={Poster === "N/A" ? NoPoster : Poster}
        alt=""
        className={styles.moviePoster}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = NoPoster; // Set fallback image
        }}
      />
      <h2 className={styles.movieTitle}>{Title}</h2>
      <h4 className={styles.movieYear}>{Year}</h4>
      <h4 className={styles.movieType}>{Type}</h4>
    </Link>
  );
}

export default MovieCard;
