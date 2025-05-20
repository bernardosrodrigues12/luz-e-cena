import classNames from 'classnames'
import styles from './Tag.module.css'
import type { Category, Censorship } from '../types';

interface TagProps {
    value: Category | Censorship;
}

const tagClasses = {
    Free: styles.free,
    "10 years": styles.ten,
    "12 years": styles.twelve,
    "14 years": styles.fourteen,  
    "16 years": styles.sixteen,
    "2D": styles.twoD,
    "3D": styles.threeD,
}

const Tag = ({ value }: TagProps) => { 
    const classes = classNames(styles.tag, tagClasses[value])
    return (
        <span className={classes}>{value}</span>
    )
}

export default Tag;