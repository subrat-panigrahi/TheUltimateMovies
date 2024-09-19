'use client';
import React, { useState, useEffect, useRef } from 'react';
import { NO_RESULTS } from '../../lib/constants';
import MovieCard from './MovieCard';
import usePopularMovies from '../hooks/usePopularMovies';
import urseMovieSearch from '../hooks/useMovieSearch';

export default function MovieList({ movies, query }) {
  console.log("query0", query);
  const [moviesToRender, setMoviesToRender] = useState(movies);
  const { isLoading, popularMoviesResponse, error, getPopularMovies } = usePopularMovies();
  const { movieSearchResponse, searchMovies } = urseMovieSearch();

  if (moviesToRender.results.length === 0) {
    return (
      <div className='px-2 text-center'>
        <h2>{NO_RESULTS}</h2>
      </div>
    );
  }

  useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  const fetchNextPage = async () => {
    if (query) {
      searchMovies(query, moviesToRender.page + 1);
    } else {
      getPopularMovies(moviesToRender.page + 1);
    }
  };

  useEffect(() => {
    if (popularMoviesResponse.page) {
      setMoviesToRender({
        ...popularMoviesResponse,
        results: [...moviesToRender.results, ...popularMoviesResponse.results]
      });
    }
  }, [popularMoviesResponse.page]);

  useEffect(() => {
    if (movieSearchResponse.page) {
      setMoviesToRender({
        ...movieSearchResponse,
        results: [...moviesToRender.results, ...movieSearchResponse.results]
      });
    }
  }, [movieSearchResponse.page]);

  return (
    <div>
      <ul>
        {moviesToRender && moviesToRender.results.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
      <div className="text-center">{(moviesToRender.page < moviesToRender.total_pages) && <button onClick={() => { fetchNextPage() }} className='primary-btn'> {isLoading ? 'Loading...' : 'Next'} </button>}</div>
    </div>
  );
}