import { MovieListType, numberOfMoviesPerPage } from "../constants/constants";
import { getUrlMovieList, postUrlMovieList } from "./config";

export const getRecommendedMovieList = (currentPage, username) => {
  return getUrlMovieList(currentPage, numberOfMoviesPerPage, username, MovieListType.Recommended);
}

export const getAddedMovieList = (currentPage, numberOfMoviesPerPage, username) => {
  return getUrlMovieList(currentPage, numberOfMoviesPerPage, username, MovieListType.Added);
}

export const getRemovedMovieList = (currentPage, numberOfMoviesPerPage, username) => {
  return getUrlMovieList(currentPage, numberOfMoviesPerPage, username, MovieListType.Removed);
}

export const postToAddedMovieList = (id, username) => {
  return postUrlMovieList(id, username, MovieListType.Added);
}