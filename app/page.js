import MovieListContainer from './homepage/container';
import Header from './components/Header';
// import { Suspense } from 'react';
async function MoviesPage() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${process.env.TMDB_API_KEY}`,{ cache: 'no-store' });
  const movies = await response.json();
  return (
    <div>
        <Header value={null} />
        {<MovieListContainer movies={movies} /> }
    </div>
  );
}

export default MoviesPage;