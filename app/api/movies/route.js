const POPULAR_MOVIES = 'https://api.themoviedb.org';
export async function GET(request) {
    try {
      const popularMoviesUrl = new URL('/3/movie/popular', POPULAR_MOVIES);
      new URL(request.url).searchParams.forEach((value, key) => {
        popularMoviesUrl.searchParams.append(key, value);
      });
      popularMoviesUrl.searchParams.append('api_key', process.env.TMDB_API_KEY);
      const popularMoviesResponse = await fetch(popularMoviesUrl);
      if (!popularMoviesResponse.ok) {
        return new Response(JSON.stringify({ message: `Failed to fetch poplular movies from tmdb` }), {
          status: 500
        });
      }

      const data = await popularMoviesResponse.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: `Failed to fetch poplular movies`, error: error.message }), {
        status: 500,
      });
    }
  }
