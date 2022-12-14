import { useEffect, useState } from "react";
import { numberOfMoviesPerPage } from "../constants/constants";
import { useStore } from "../store/store";

export default function useMovieList (getApiCall) {
  const username = useStore(state => state.username);
  const setTotalPageCount = useStore(state => state.setTotalPageCount);
  const currentPage = useStore(state => state.currentPage);

  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getApiCall(currentPage, numberOfMoviesPerPage, username);
        const { pagination, data } = response;

        setMovies(previousMovies => [...previousMovies, ...data]);
        setTotalPageCount(pagination.totalPages);
        setLoading(false);
      } catch (err) {
        if (err.response) {
          // Client was given a http error response (5xx, 4xx)
          console.log('Response data:', err.response.data);
          console.log('Response status: ', err.response.status);
          console.log('Response headers: ', err.response.headers);
        } else if (err.request) {
          // The request was made but there was no response
          console.log(err.request);
        } else {
          // Anything else
          console.log('Error', err.message);
        }
      }
    })();
  }, [currentPage, username])

  return {
    movies,
    setMovies,
    isLoading
  };
}
