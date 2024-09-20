'use client';
import React, { useState, useEffect } from 'react';
import useMovieSearch from '../hooks/useMovieSearch';
import MovieList from '../components/MovieList';

export default function SearchPageContainer({ movies, query }) {
    const [moviesToRender, setMoviesToRender] = useState(movies);
    const {movieSearchResponse, isLoading,/* error,*/ searchMovies} = useMovieSearch();

    const fetchNextPage = async () => {
          searchMovies(query, moviesToRender.page + 1);
      };

    useEffect(() => {
        if (movieSearchResponse.page) {
          setMoviesToRender({
            ...movieSearchResponse,
            results: [...moviesToRender.results, ...movieSearchResponse.results]
          });
        } else {
          console.log('movieSearchResponse', movieSearchResponse);
        }
      }, [movieSearchResponse.page]);

    return (
        <div>
            <MovieList movies={moviesToRender} fetchNextPage={() => { fetchNextPage() }} isLoading={isLoading}/>
        </div>
    );
}