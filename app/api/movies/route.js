import { MOVIES_DOMAIN } from '../../../lib/constants';
export async function GET(request) {
    try {
      const popularMoviesUrl = new URL('/3/movie/popular', MOVIES_DOMAIN);
      new URL(request.url).searchParams.forEach((value, key) => {
        popularMoviesUrl.searchParams.append(key, value);
      });
      popularMoviesUrl.searchParams.append('api_key', process.env.TMDB_API_KEY);
      const popularMoviesResponse = await fetch(popularMoviesUrl);
      if (!popularMoviesResponse.ok) {
        let err =  new Error(`HTTP error! status: ${popularMoviesResponse.status}`);
        err.status = popularMoviesResponse.status;
        throw err;
      }

      const data = await popularMoviesResponse.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: `Failed to fetch poplular movies`, error: error.message }), {
        status: error.status || 500,
      });
    }
  }
