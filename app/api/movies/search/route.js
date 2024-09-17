const TMDB_KEY = '52356ee2f53eb5738f1d63e73329f442';
const MOVIES_DOMAIN = 'https://api.themoviedb.org';
export async function GET(request) {
    try {
      const { searchParams:params } = new URL(request.url);
      const moviesUrl = new URL('/3/search/movie', MOVIES_DOMAIN);
      params.forEach((value, key) => {
        moviesUrl.searchParams.append(key, value);
      });
      moviesUrl.searchParams.append('api_key', TMDB_KEY);
      const searchResponse = await fetch(moviesUrl);
      if (!searchResponse.ok) {
        return new Response(JSON.stringify({ message:`Failed to fetch Search response from tmdb ${params.query}`}), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      const data = await searchResponse.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: `Movie Search exception ${params.query}`, error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  