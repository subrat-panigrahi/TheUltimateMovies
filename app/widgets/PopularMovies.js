'use client';
import React, { useState, useEffect } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import MovieList from '../components/MovieList';

// Supports both client side ans server side rendering. Any more widget that's need in future can be added to this folder. e.g trending movies, upcoming releases etc.
export default function PopularMovies({ movies }) {
    const [moviesToRender, setMoviesToRender] = useState(movies || {});
    const { isLoading, popularMoviesResponse,getPopularMovies, error } = usePopularMovies();
    const fetchNextPage = async () => {
        getPopularMovies(moviesToRender.page + 1);
    };

    useEffect(() => {
        if(!movies) { // for client side rendering.
            getPopularMovies(1);
        } 
    }, []);

    useEffect(() => {
        // in case of client side render, set the first page here
            if(!movies && popularMoviesResponse.page === 1)  {
                setMoviesToRender(popularMoviesResponse);
            }   // append the value from second page
            else if (popularMoviesResponse.page > 1) {
                setMoviesToRender((prevMoviesToRender) => ({
                    ...popularMoviesResponse,
                    results: [...prevMoviesToRender.results, ...popularMoviesResponse.results]
                }));
            }
    }, [popularMoviesResponse]);

    // When server side rendering fails, movies will be undefined
    if(error || !moviesToRender) {
        return <div className='flex justify-center items-center'>Something went wrong please &nbsp; &nbsp;<button className='primary-btn' onClick={()=>{location.reload()}}>Retry</button></div>
    }
  
    return (
        <div>
            <div className='max-w-4xl mx-auto pl-4 pr-4 font-bold'>Popular movies</div>
            <MovieList movies={moviesToRender} fetchNextPage={() => { fetchNextPage() }} isLoading={isLoading}/>
        </div>
    );
}