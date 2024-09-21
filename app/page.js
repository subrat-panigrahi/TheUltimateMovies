import fetchWithTimeout from '@/lib/utils';
import MovieListContainer from './widgets/PopularMovies';
// import Header from './components/Header';
// import { Suspense } from 'react';

async function fetchPopularMovies() {
  try {
    const response = await fetchWithTimeout(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${process.env.TMDB_API_KEY}`, { next: { revalidate: 86400 } });
    return response;
  }
  catch (e) {
    // winston can be used
    console.log("api call error", e);
  }
};

async function MoviesPage() {
  const movies = await fetchPopularMovies();
  return (
    <div>
      {<MovieListContainer movies={movies} type='server' />}
    </div>
  );
}

export default MoviesPage;