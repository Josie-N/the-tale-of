import styles from "../MovieCard/MovieCard.module.css";
import React from "react";
import { getFormatMovieTitle, getImdbRatingInteger } from "../MovieCard/utils/helper";
import { MovieData } from "../../../types/Movies";

type Props = {
  movie: MovieData
}

export default function MovieListContent({ movie }: Props) {
  const { name, releaseYear, genre, imdbRating, overview } = movie;
  const imdbRatingInteger = getImdbRatingInteger(imdbRating);
  const movieTitle = getFormatMovieTitle(name);

  return (
    <>
      <div className={styles.movieCardInner}>
        <h4 className={styles.movieTitle__open}>{movieTitle}</h4>
        <p className={styles.movieDetails}>
          <span className={styles.movieYear}>{releaseYear} ∙ </span>
          <span>{genre}</span>
        </p>
        <p className={styles.movieDescription}>{overview}</p>
      </div>
      <p className={styles.movieRating}>{imdbRatingInteger}</p>
    </>
  )
}
