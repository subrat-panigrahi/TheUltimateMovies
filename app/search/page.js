import SearchPageContainer from './container';
// import {use} from 'react';
import Header from '../components/Header';

async function fetchSearchMovies(query) {
  const response = await fetch(`${process.env.BASE_URL}/api/movies/search?query=${query}`);
  const movies = await response.json();
  return movies;
};

export default async function MoviesPage(request) {
    const query = request.searchParams['query']|| '';
    const movies = await fetchSearchMovies(query);
    return (
      <div>
        <Header value={query} />
        {<SearchPageContainer movies={movies} query={query}/>}
      </div>
    );
}