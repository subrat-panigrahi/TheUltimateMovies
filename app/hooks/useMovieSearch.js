import { useState } from "react";
import { MOVIE_SEARCH_API } from '../../lib/constants';
import fetchWithTimeout from '../../lib/utils';

const useMovieSearch = () => {
    const [isLoading, setLoading] = useState(false);
    const [movieSearchResponse, setMovieSearchResponse] = useState({});
    const [error, setError] = useState("");
    const searchMovies = async (query, page) => {
        try {
            const url = `${MOVIE_SEARCH_API}?query=${query}&page=${page}`;
            setLoading(true);
            const res = await fetchWithTimeout(url);
            setMovieSearchResponse(res);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }
    return { movieSearchResponse, isLoading, error, searchMovies };
};

export default useMovieSearch;