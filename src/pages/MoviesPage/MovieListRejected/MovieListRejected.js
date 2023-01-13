import React from "react";

import MovieList from "../MovieList/MovieList";
import LoadMoreMovies from "../LoadMoreMovies/LoadMoreMovies";
import useQueryListRejected from "./hooks/useQueryListRejected";

const MovieListRejected = () => {
  const { movies: rejectedMovies, fetchNextPage, hasNextPage } = useQueryListRejected();

  // Runs when user clicks button to see more movies
  const handleLoadMoreMovies = () => {
    fetchNextPage();
  }

  return (
    <>
      <MovieList movies={rejectedMovies} />
      <LoadMoreMovies
        movies={rejectedMovies}
        handleLoadMoreMovies={handleLoadMoreMovies}
        hasNextPage={hasNextPage}
      />
    </>
  )
}

export default MovieListRejected;