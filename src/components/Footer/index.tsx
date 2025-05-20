import FooterInfo from "./FooterInfo"
import FooterLogo from "./FooterLogo"
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_infos}>
            <FooterLogo />
            <FooterInfo />
        </div>
    </footer>
  )
}

export default Footer