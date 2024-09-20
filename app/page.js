import MovieListContainer from './homepage/container';
import Header from './components/Header';
// import { Suspense } from 'react';
async function MoviesPage() {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=52356ee2f53eb5738f1d63e73329f442",{ cache: 'no-store' });
  const movies = await response.json();
  return (
    <div>
        <Header value={null} />
        {<MovieListContainer movies={movies} /> }
    </div>
  );
}

export default MoviesPage;