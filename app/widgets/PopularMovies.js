'use client';
import React, { useState, useEffect } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import MovieList from '../components/MovieList';

export default function MovieListContainer({ movies, type }) {
    const [moviesToRender, setMoviesToRender] = useState(movies);
    const { isLoading, popularMoviesResponse,getPopularMovies } = usePopularMovies();

    const fetchNextPage = async () => {
        getPopularMovies(moviesToRender.page + 1);
    };

    useEffect(() => {
        if(type == 'widget') {
            getPopularMovies(1);
        } 
    }, []);

    useEffect(() => {
        // in case of client side render, fetch the first page here
            if(type == 'widget' && popularMoviesResponse.page === 1)  {
                setMoviesToRender(popularMoviesResponse);
            }   // append the value from second page
            else if (popularMoviesResponse.page > 1) {
                setMoviesToRender((prevMoviesToRender) => ({
                    ...popularMoviesResponse,
                    results: [...prevMoviesToRender.results, ...popularMoviesResponse.results]
                }));
            } else {
                console.log("here");
            }
    }, [popularMoviesResponse]);

    // When server side rendering fails, movies will be undefined

    if(type !== 'widget' && !movies) {
        return <div className='flex justify-center items-center'>Something went wrong please &nbsp; &nbsp;<button className='primary-btn' onClick={()=>{location.reload()}}>Retry</button></div>
    }
  
    return (

        <div>
            <div className='max-w-4xl mx-auto p-4 font-bold'>Popular movies</div>
            <MovieList movies={moviesToRender} fetchNextPage={() => { fetchNextPage() }} isLoading={isLoading}/>
        </div>
    );
}