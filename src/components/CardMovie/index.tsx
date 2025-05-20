import styles from './CardMovie.module.css'
import Tag from '../Tag'
import type { Movie } from '../types';


const CardMovie = (props: Movie) => {
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