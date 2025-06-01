import axios, { Axios } from "axios";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

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
  return <div>{movieDetail.Title}</div>;
}

export default SingleMovieDetail;
