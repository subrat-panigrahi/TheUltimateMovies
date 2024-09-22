import fetchWithTimeout from '@/lib/utils';
import PopularMovies from './widgets/PopularMovies';
import { MOVIES_DOMAIN } from '@/lib/constants';

async function fetchPopularMovies() {
  try {
    const response = await fetchWithTimeout(`${MOVIES_DOMAIN}/3/movie/popular?language=en-US&api_key=${process.env.TMDB_API_KEY}&page=uh`, { next: { revalidate: 86400 } });
    return response;
  }
  catch (e) {
    console.log("api call error", e);
  }
};

// Statically generated page
async function MoviesPage() {
  const movies = await fetchPopularMovies();
  return (
    <div>
      {<PopularMovies movies={movies} />}
    </div>
  );
}

export default MoviesPage;