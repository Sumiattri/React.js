import axios, { Axios } from "axios";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";
import styles from "./SingleMovieDetail.module.css";
import NoPoster from "../assets/NoPoster.png";

export async function loader({ params }) {
  const ID = params.id;

  const URL = `https://www.omdbapi.com/?apikey=${apiKey}&i=${ID}&plot=full`;

  try {
    const response = await axios.get(URL);
    return {
      movie: response.data,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "something went wrong";
    return {
      movie: null,
      isError: true,
      error: errorMessage,
    };
  }
}

function SingleMovieDetail() {
  const { movie: movieDetail, isError, error } = useLoaderData();
  if (movieDetail && movieDetail.Response === "False") {
    return <h1>{movieDetail.Error}</h1>;
  }
  console.log(movieDetail);
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={`container ${styles.movieDetail}`}>
      <div className={styles.infoOnLeft}>
        <h2>{movieDetail.Title}</h2>
        <img
          src={movieDetail.Poster === "N/A" ? NoPoster : movieDetail.Poster}
          alt={movieDetail.Title}
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = NoPoster; // Set fallback image
          }}
        />

        <p className={styles.infoPara}>
          <span className={styles.key}>Release Date </span>
          <span className={styles.value}>{movieDetail.Released}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}> Genre </span>
          <span className={styles.value}> {movieDetail.Genre}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Runtime </span>
          <span className={styles.value}> {movieDetail.Runtime}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Language </span>
          <span className={styles.value}>{movieDetail.Language}</span>
        </p>

        <p className={styles.infoPara}>
          <span className={styles.key}>Awards </span>
          <span className={styles.value}> {movieDetail.Awards}</span>
        </p>
      </div>
      <div className={styles.infoOnright}>
        <div className="plot">
          <div className={styles.bigInfo}>
            <h3>Plot</h3>
            <p>{movieDetail.Plot}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Actors</h3>
            <p>{movieDetail.Actors}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Country</h3>
            <p>{movieDetail.Country}</p>
          </div>
          <h2>More Info</h2>
          <p className={styles.infoPara}>
            <span className={styles.key}>Director </span>
            <span className={styles.value}>{movieDetail.Director}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>imdb Rating </span>
            <span className={styles.value}>{movieDetail.imdbRating}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>imdb Votes </span>
            <span className={styles.value}>{movieDetail.imdbVotes}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Boxoffice </span>
            <span className={styles.value}>{movieDetail.BoxOffice}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Metascore</span>
            <span className={styles.value}>{movieDetail.Metascore}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Rated</span>
            <span className={styles.value}>{movieDetail.Rated}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieDetail;
