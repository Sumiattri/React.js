import React from "react";

function MoviesList({ data }) {
  const { movieApiResponse, error, isError } = data;
  //   console.log(movieApiResponse)
  if (isError) {
    return <h1>{error}</h1>;
  }

  if (movieApiResponse && movieApiResponse.Response === "False") {
    return <h1>{movieApiResponse.Error || "No results Found"}</h1>;
  }
  return (
    <div>
      {movieApiResponse.Search.map((movie) => {
        return <p key={movie.imdbID}>{movie.Title}</p>;
      })}
    </div>
  );
}

export default MoviesList;
