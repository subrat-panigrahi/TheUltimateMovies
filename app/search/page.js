import SearchPageContainer from './container';
//import Header from '../components/Header';

async function fetchSearchMovies(query) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`, { cache: 'no-store' });
  const movies = await response.json();
  return movies;
};

export default async function MoviesPage(request) {
    const query = request.searchParams['query']|| '';
    const movies = await fetchSearchMovies(query);
    return (
      <div>
        {<SearchPageContainer movies={movies} query={query}/>}
      </div>
    );
}