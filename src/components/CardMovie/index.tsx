import styles from './CardMovie.module.css'
import Tag from '../Tag'

type Category = "2D" | "3D" ;

type Censorship = "Free" | "10 years" | "12 years" | "14 years" | "16 years";

interface CardMovieProps{
    src: string;
    alt: string;
    title: string;
    category: Category
    censorship: Censorship,
    genre: string;
    duration: string;
}

const CardMovie = (props: CardMovieProps) => {
  const { src, alt, title, category, censorship, genre, duration } = props;
  return (
    <li className={styles.card}>
        <img src={src} alt={alt} />
        <div className={styles.container}>
            <h3>{title}</h3>
            <div className={styles.infos}>
                <div className={styles.line1}>
                    <p>{genre}</p>
                    <Tag value={category}/>
                </div>
                <div className={styles.line2}>
                    <p>{duration}</p>
                    <Tag value={censorship}/>
                </div>
            </div>
        </div>
    </li>
  )
}

export default CardMovie