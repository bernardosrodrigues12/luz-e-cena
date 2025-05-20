import { FaSearch } from 'react-icons/fa'
import Button from '../Button'
import FieldSet from '../FieldSet'
import InputText from '../InputText'
import styles from './MovieSection.module.css'
import MovieList from '../MovieList'
import useFetchMovies from '../../hooks/useFetchMovies'

const MovieSection = () => {
    const {movies, error, isLoading} = useFetchMovies();

  return (
    <main>
        <section className={styles.container}>
            <FieldSet variant='secondary'>
                <InputText placeholder='Buscar filmes...'/>
                <Button variant='icon'>
                    <FaSearch />
                </Button>
            </FieldSet>
            <h1 className={styles.title}>Em cartaz</h1>
            <MovieList movies={movies}/>
        </section>
    </main>
  )
}

export default MovieSection