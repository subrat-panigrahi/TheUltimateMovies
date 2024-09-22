// import fetchWithTimeout from '@/lib/utils';
import PopularMovies from './PopularMovies';
import fetch from 'node-fetch';
// import { MOVIES_DOMAIN } from '@/lib/constants';

/* async function fetchPopularMovies() {
  try {
    const response = await fetch(`${MOVIES_DOMAIN}/3/movie/popular?language=en-US&api_key=${process.env.TMDB_API_KEY}`, { next: { revalidate: 86400 } });
    let data = await response.json();
    return data;
  }
  catch (e) {
    console.log("api call error", e);
  }
}; */

// Statically generated page
export default async function MoviesPage() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=52356ee2f53eb5738f1d63e73329f442`,{  // Revalidate every 24 hours
    cache: 'force-cache'});
  let data = await response.json();
  
  return (
    <div>
      <PopularMovies movies={data} />
    </div>
  );
}
