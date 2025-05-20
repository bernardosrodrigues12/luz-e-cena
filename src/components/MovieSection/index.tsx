import { FaSearch } from 'react-icons/fa'
import type { Movie } from '../types'
import Button from '../Button'
import FieldSet from '../FieldSet'
import InputText from '../InputText'
import styles from './MovieSection.module.css'
import MovieList from '../MovieList'

const movies: Movie[] = [
    {
        id: 1,
        src: "../../../public/assets/images/Cards filmes/Card - Amanhecer.png",
        alt: "Imagem do filme Amanhecer",
        title: "Amanhecer",
        category: "2D",
        censorship: "Free",
        genre: "Romance",
        duration: 90,
    },
    {
        id: 2,
        src: "../../../public/assets/images/Cards filmes/Card - Amigo da sombra.png",
        alt: "Imagem do filme Amigo da sombra",
        title: "Amigo da sombra",
        category: "2D",
        censorship: "12 years",
        genre: "Suspense",
        duration: 110,
    },
    {
        id: 3,
        src: "../../../public/assets/images/Cards filmes/Card - Amigos do bosque mágico.png",
        alt: "Imagem do filme Amigo do bosque mágico",
        title: "Amigo do bosque mágico",
        category: "2D",
        censorship: "Free",
        genre: "Animação",
        duration: 60,
    },
    {
        id: 4,
        src: "../../../public/assets/images/Cards filmes/Card - Caminho para o abismo.png",
        alt: "Imagem do filme Caminho para o abismo",
        title: "Caminho para o abismo",
        category: "2D",
        censorship: "14 years",
        genre: "Horror",
        duration: 103,
    },
    {
        id: 5,
        src: "../../../public/assets/images/Cards filmes/Card - Desastres do Escritório.png",
        alt: "Imagem do filme Desastres do Escritório",
        title: "Desastres do Escritório",
        category: "2D",
        censorship: "Free",
        genre: "Comédia",
        duration: 85,
    },
    {
        id: 6,
        src: "../../../public/assets/images/Cards filmes/Card - Mestres do futuro.png",
        alt: "Imagem do filme Mestres do Futuro",
        title: "Mestres do Futuro",
        category: "2D",
        censorship: "Free",
        genre: "Documentário",
        duration: 120,
    },
    {
        id: 7,
        src: "../../../public/assets/images/Cards filmes/Card - La Esperanza.png",
        alt: "Imagem do filme La Esperanza",
        title: "La Esperanza",
        category: "2D",
        censorship: "12 years",
        genre: "Drama",
        duration: 98,
    },
    {
        id: 8,
        src: "../../../public/assets/images/Cards filmes/Card - O nexus do tempo.png",
        alt: "Imagem do filme O nexus do tempo",
        title: "O nexus do tempo",
        category: "3D",
        censorship: "10 years",
        genre: "Ficcção Científica",
        duration: 105,
    },
];

const MovieSection = () => {
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