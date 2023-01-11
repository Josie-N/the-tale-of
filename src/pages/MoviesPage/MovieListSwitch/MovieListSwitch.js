import React from 'react';

import { MovieListType } from "../../../constants/constants";
import { useStore } from "../../../store/store";

import MovieListRecommended from "../MovieListRecommended/MovieListRecommended";
import MovieListUserAdded from "../MovieListUserAdded/MovieListUserAdded";
import EmptyScreen from "../../../components/generic/EmptyScreen/EmptyScreen";
import useListRecommendedQuery from "../MovieListRecommended/hooks/useQueryListRecommended";

function MovieListSwitch () {
  const { movies, isLoading: isLoadingMovies } = useListRecommendedQuery();

  const movieListType = useStore(state => state.movieListType);
  const movieCountAddedList = useStore(state => state.movieCountAddedList);
  const movieCountRemovedList = useStore(state => state.movieCountRemovedList);

  const isRecommendedListEmpty = movies.data.length === 0;
  const isAddedListEmpty = movieCountAddedList === 0;
  const isRemovedListEmpty = movieCountRemovedList === 0;

  switch (movieListType) {
    case MovieListType.Recommended:
      return !isLoadingMovies && isRecommendedListEmpty ? <EmptyScreen /> : <MovieListRecommended />
    case MovieListType.Added:
      return !isLoadingMovies && isAddedListEmpty ? <EmptyScreen /> : <MovieListUserAdded />
    case MovieListType.Removed:
      return !isLoadingMovies && isRemovedListEmpty ? <EmptyScreen /> : <p>You've been removed!</p>
    default:
      throw Error('Error! This movie list does not exist.')
  }
}

export default MovieListSwitch;
