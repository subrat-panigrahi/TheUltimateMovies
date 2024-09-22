import fetchWithTimeout from '@/lib/utils';
import PopularMovies from './widgets/PopularMovies';
import fetch from 'node-fetch';
import { MOVIES_DOMAIN } from '@/lib/constants';

async function fetchPopularMovies() {
    const response = await fetch(`${MOVIES_DOMAIN}/3/movie/popular?language=en-US&api_key=${process.env.TMDB_API_KEY}`, { next: { revalidate: 86400 } });
    let data = await response.json();
    return data;
};

// Statically generated page
export default async function MoviesPage() {
  data = await fetchPopularMovies();

  return (
    <div>
      <PopularMovies movies={data} />
    </div>
  );
}
