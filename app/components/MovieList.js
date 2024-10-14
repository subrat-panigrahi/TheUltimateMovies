'use client';
import React, { useEffect } from 'react';
import { NO_RESULTS } from '../../lib/constants';
import MovieCard from './MovieCard';
import ReactQueryTest from './ReactQueryTest';
// used as an intermediary layer where pagination is handled and can be used for renderAsProp if required in future
export default function MovieList({ movies, fetchNextPage, isLoading }) {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scrolling',window.innerHeight + window.scrollY >= document.body.scrollHeight);
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        console.log('fetching next page');
        fetchNextPage();
      }
    });
    return () => {
      window.removeEventListener('scroll', () => { });
    };
  }, []);
  if (movies?.results?.length === 0) {
    return (
      <div className='px-2 text-center'>
        <h2>{NO_RESULTS}</h2>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {movies?.results?.map((movie,index) => (
          <li key={movie.id}>
              <MovieCard movie={movie} isEager={index<4}/>
          </li>
        ))}
      </ul>
        <ReactQueryTest />
      <div className="text-center">{(movies?.page < movies?.total_pages) && <button onClick={() => { fetchNextPage() }} className='primary-btn'> {isLoading ? 'Loading...' : 'Next'} </button>}</div>
    </div>
  );
}
