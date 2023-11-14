'use client';
import React from 'react';
import {
  MovieWrapper,
  MoviePoster,
  MovieDetail,
  MovieTitle,
  MovieGenre,
  MovieReleaseDate,
  MovieRating,
} from './MovieCard.styled';
import Rating from '../Rating';
import { IMovieCard } from '@/types/movies';

const MovieCard = ({ genre, poster, release_date, title, vote_average }: IMovieCard) => {
  return (
    <MovieWrapper>
      <MovieRating>
        <Rating value={vote_average} />
      </MovieRating>
      <MoviePoster src={poster} alt="Poster" width={250} height={350} />
      <MovieDetail>
        <MovieTitle>{title}</MovieTitle>
        <MovieGenre>{genre}</MovieGenre>
        <MovieReleaseDate>
          Estreno: <span>{release_date}</span>
        </MovieReleaseDate>
      </MovieDetail>
    </MovieWrapper>
  );
};

export default MovieCard;
