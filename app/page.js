import MovieListContainer from './homepage/container';
import Header from './components/Header';
// import { Suspense } from 'react';

async function fetchPopularMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${process.env.TMDB_API_KEY}`, { next: { revalidate: 86400 } });
    const movies = await response.json();
    return movies;
  }
  catch (e) {
    // winston can be used
    console.log("api call error", e);
    return e;
  }
};

async function MoviesPage() {
  const movies = await fetchPopularMovies();
  return (
    <div>
      <Header value={null} />
      {<MovieListContainer movies={movies} />}
    </div>
  );
}

export default MoviesPage;