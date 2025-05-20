import { useEffect, useState } from "react";
import type { Movie } from "../components/types";

const useFiltersMovie = (movies: Movie[]) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

    useEffect(()=> {
        setFilteredMovies(movies)
    }, [movies]);

    const handleSearch = () => {
        const filtered = movies.filter((movie) => (
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setFilteredMovies(filtered)
    }

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch }
}

export default useFiltersMovie