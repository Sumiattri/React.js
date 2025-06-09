import SearchForms from "../components/SearchForms";
import MoviesList from "../components/MoviesList";
import { apiKey } from "../constants";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  console.log(request);

  const url = new URL(request.url);
  console.log(url);

  const searchTerm = url.searchParams.get("search") || "venom";
  // console.log(searchTerm);
  const movieSearchEndpoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

  try {
    const response = await axios.get(movieSearchEndpoint);
    // console.log(response);

    return {
      movieApiResponse: response.data,
      searchTerm: searchTerm,
      error: null,
      isError: false,
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error || error?.message || "Something went wrong";

    return {
      movieApiResponse: null,
      searchTerm: searchTerm,
      error: errorMessage,
      isError: true,
    };
  }
}

function Home() {
  const data = useLoaderData();
  return (
    <div>
      <SearchForms defaultName={data.searchTerm} />
      <MoviesList data={data} />
    </div>
  );
}

export default Home;
