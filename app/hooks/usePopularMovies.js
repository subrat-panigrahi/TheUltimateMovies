import { useState } from "react";
import { POPULAR_MOVIES_API } from '../../lib/constants';
import fetchWithTimeout from "@/lib/utils";

// Custom hook to fetch popular movies
const usePopularMovies = () => {
    const [isLoading, setLoading] = useState(false);
    const [popularMoviesResponse, setPopularMoviesResponse] = useState({});
    const [error, setError] = useState("");
    const getPopularMovies = async (page) => {
        try {
            const url = `${POPULAR_MOVIES_API}?page=${page}`;
            setLoading(true);
            const data = await fetchWithTimeout(url);
            setPopularMoviesResponse(data);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }
    return { popularMoviesResponse, isLoading, error, getPopularMovies };
};

export default usePopularMovies;
