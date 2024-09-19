import MovieList from './components/MovieList';
// import {use} from 'react';
import Header from './components/Header';

async function fetchPopularMovies() {
  const response = await fetch(`${process.env.BASE_URL}/api/movies`);
  const movies = await response.json();
  return movies;
};


export default async function MoviesPage(request) {
    const movies = await fetchPopularMovies();
    return (
      <div>
        <Header />
        {<MovieList movies={movies} />}
      </div>
    );
  }