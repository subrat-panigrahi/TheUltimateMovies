const TMDB_KEY = '52356ee2f53eb5738f1d63e73329f442';
const POPULAR_MOVIES = 'https://api.themoviedb.org';
export async function GET(request) {
    try {

      const { searchParams:params } = new URL(request.url);
      const popularMoviesUrl = new URL('/3/movie/popular', POPULAR_MOVIES);
      params.forEach((value, key) => {
        popularMoviesUrl.searchParams.append(key, value);
      });
      popularMoviesUrl.searchParams.append('api_key', TMDB_KEY);
      const popularMoviesResponse = await fetch(popularMoviesUrl);

      if (!popularMoviesResponse.ok) {
        return new Response(JSON.stringify({ message: `Failed to fetch poplular movies from tmdb${params.page}` }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const data = await popularMoviesResponse.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: `Failed to fetch poplular movies ${params.page}`, error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
