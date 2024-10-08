import { MOVIES_DOMAIN } from '../../../../lib/constants';
export async function GET(request) {
    try {
      const moviesUrl = new URL('/3/search/movie', MOVIES_DOMAIN);
      new URL(request.url).searchParams.forEach((value, key) => {
        moviesUrl.searchParams.append(key, value);
      });
      moviesUrl.searchParams.append('api_key', process.env.TMDB_API_KEY); // appends all the query params passed in the api.
      const searchResponse = await fetch(moviesUrl);
      if (!searchResponse.ok) {
          let err =  new Error(`HTTP error! status: ${searchResponse.status}`);
          err.status = searchResponse.status;
          throw err;
      }
      const data = await searchResponse.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: `Movie Search exception`, error: error.message }), {
        status: 500,
      });
    }
  }
  