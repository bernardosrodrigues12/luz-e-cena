import styles from './MovieList.module.css'
import CardMovie from '../CardMovie'

type Category = "2D" | "3D" ;

type Censorship = "Free" | "10 years" | "12 years" | "14 years" | "16 years";

interface Movie {
    id: number;
    src: string;
    alt: string;
    title: string;
    category: Category
    censorship: Censorship,
    genre: string;
    duration: string;
}

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.list}>
        {movies.map((movie) => (
            <CardMovie key={movie.id} {...movie}/>
        ))}
    </ul>
  )
}

export default MovieList