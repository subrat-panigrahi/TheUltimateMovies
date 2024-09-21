'use client';
import React, { useState, useEffect } from 'react';
import useMovieSearch from '../hooks/useMovieSearch';
import MovieList from '../components/MovieList';

export default function SearchPageContainer({ movies, query }) {
  const [moviesToRender, setMoviesToRender] = useState(movies);
  const { movieSearchResponse, isLoading, searchMovies } = useMovieSearch();

  const fetchNextPage = async () => {
    searchMovies(query, moviesToRender.page + 1);
  };

  // This useEffect will be called when the searchMovies function is called, i.e when user clicks on next button
  useEffect(() => {
    if (movieSearchResponse.page) {
      setMoviesToRender({
        ...movieSearchResponse,
        results: [...moviesToRender.results, ...movieSearchResponse.results]
      });
    } else {
      console.log('movieSearchResponse', movieSearchResponse);
    }
  }, [movieSearchResponse]);

  useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  // When server side rendering fails, movies will be undefined
  if (!movies) {
    return <div className='flex justify-center items-center'>Something went wrong please &nbsp; &nbsp;<button className='primary-btn' onClick={()=>{location.reload()}}>Retry</button></div>
  }

  return (
    <div>
      <MovieList movies={moviesToRender} fetchNextPage={() => { fetchNextPage() }} isLoading={isLoading} />
    </div>
  );
}