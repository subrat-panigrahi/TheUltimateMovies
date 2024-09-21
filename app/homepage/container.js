'use client';
import React, { useState, useEffect } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import MovieList from '../components/MovieList';

export default function MovieListContainer({ movies }) {
    const [moviesToRender, setMoviesToRender] = useState(movies);
    const { isLoading, popularMoviesResponse, /*error, */getPopularMovies } = usePopularMovies();

    const fetchNextPage = async () => {
        getPopularMovies(moviesToRender.page + 1);
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

    // When server side rendering fails, movies will be undefined
  if (!movies) {
    return <div className='flex justify-center items-center'>Something went wrong please &nbsp; &nbsp;<button className='primary-btn' onClick={()=>{location.reload()}}>Retry</button></div>
  }

    return (
        <div>
            <MovieList movies={moviesToRender} fetchNextPage={() => { fetchNextPage() }} isLoading={isLoading}/>
        </div>
    );
}