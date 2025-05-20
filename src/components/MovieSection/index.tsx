import { FaSearch } from 'react-icons/fa'
import Button from '../Button'
import FieldSet from '../FieldSet'
import InputText from '../InputText'
import styles from './MovieSection.module.css'
import MovieList from '../MovieList'
import useFetchMovies from '../../hooks/useFetchMovies'
import useFiltersMovie from '../../hooks/useFiltersMovie'
import type React from 'react'

const MovieSection = () => {
    const {movies, error, isLoading} = useFetchMovies();
    const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = useFiltersMovie(movies);

  return (
    <main>
        <section className={styles.container}>
            <FieldSet variant='secondary'>
                <InputText value={searchTerm} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchTerm(event.target.value)} 
                    placeholder='Buscar filmes...'
                />
                <Button variant='icon' onClick={handleSearch}>
                    <FaSearch />
                </Button>
            </FieldSet>
            <h1 className={styles.title}>Em cartaz</h1>
            {isLoading && <p>Loading Movies...</p>}
            {error && <p className={styles.error}>{error}</p>}
            <MovieList movies={filteredMovies}/>
        </section>
    </main>
  )
}

export default MovieSection