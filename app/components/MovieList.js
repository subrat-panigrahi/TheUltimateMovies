'use client';
import React from 'react';
import { NO_RESULTS } from '../../lib/constants';
import MovieCard from './MovieCard';

export default function MovieList({ movies, fetchNextPage, isLoading }) {
console.log('mounting');
  if (movies && movies.results && movies.results.length === 0) {
    return (
      <div className='px-2 text-center'>
        <h2>{NO_RESULTS}</h2>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {movies && movies.results.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
      <div className="text-center">{(movies.page < movies.total_pages) && <button onClick={() => { fetchNextPage() }} className='primary-btn'> {isLoading ? 'Loading...' : 'Next'} </button>}</div>
    </div>
  );
}