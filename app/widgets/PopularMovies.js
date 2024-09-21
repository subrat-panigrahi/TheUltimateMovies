'use client';
import React, { useState, useEffect } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import MovieList from '../components/MovieList';

export default function MovieListContainer({ movies, type }) {
    const [moviesToRender, setMoviesToRender] = useState(movies);
    const { isLoading, popularMoviesResponse,getPopularMovies } = usePopularMovies();
    const isTypeClient = type !== 'server'; // will take the decision whether to fetch the first page data or not

    const fetchNextPage = async () => {
        getPopularMovies(moviesToRender.page + 1);
    };

    useEffect(() => {
        if(isTypeClient) {
            alert("1");
            getPopularMovies(1);
        } 
    }, []);

    useEffect(() => {
        // in case of client side render, set the first page here
            if(isTypeClient && popularMoviesResponse.page === 1)  {
                alert(2);
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
    if(!isTypeClient && !movies) {
        return <div className='flex justify-center items-center'>Something went wrong please &nbsp; &nbsp;<button className='primary-btn' onClick={()=>{location.reload()}}>Retry</button></div>
    }
  
    return (

        <div>
            <div className='max-w-4xl mx-auto pl-4 pr-4 font-bold'>Popular movies</div>
            <MovieList movies={moviesToRender} fetchNextPage={() => { fetchNextPage() }} isLoading={isLoading}/>
        </div>
    );
}