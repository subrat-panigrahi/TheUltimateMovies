'use client';
import React, { useState, useEffect } from 'react';
import { NO_RESULTS } from '../../lib/constants';
import MovieCard from './MovieCard';
import usePopularMovies from '../hooks/usePopularMovies';
import urseMovieSearch from '../hooks/useMovieSearch';

export default function MovieList({ movies, query }) {
  const [moviesToRender, setMoviesToRender] = useState(movies);
  const { isLoading, popularMoviesResponse, /*error, */getPopularMovies } = usePopularMovies();
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
    function updateStore() {
      if (popularMoviesResponse.page) {
        setMoviesToRender((prevMoviesToRender) => ({
          ...popularMoviesResponse,
          results: [...prevMoviesToRender.results, ...popularMoviesResponse.results]
        }));
      } else {
        console.log('popularMoviesResponse', popularMoviesResponse);
      }
    } 
    updateStore();
        
  }, [popularMoviesResponse]);

  useEffect(() => {
    if (movieSearchResponse.page) {
      setMoviesToRender({
        ...movieSearchResponse,
        results: [...moviesToRender.results, ...movieSearchResponse.results]
      });
    } else {
      console.log('movieSearchResponse', movieSearchResponse);
    }
  }, [movieSearchResponse, movieSearchResponse.page]);

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