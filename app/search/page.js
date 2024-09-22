import SearchPageContainer from './container';
import fetchWithTimeout from '@/lib/utils';
import { MOVIES_DOMAIN } from '@/lib/constants';

async function fetchSearchMovies(query) {
  try{
  const response = await fetchWithTimeout(`${MOVIES_DOMAIN}/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`, { cache: 'no-store' });
  return response;
  } catch (e) {
    console.error('error on fetchSearchMovies', e);
  }
};

export default async function MoviesPage(request) {
    const query = request.searchParams['query']|| '';
    const movies = await fetchSearchMovies(query);
    console.log("search movies", movies);
    return (
      <div>
        {<SearchPageContainer movies={movies} query={query}/>}
      </div>
    );
}