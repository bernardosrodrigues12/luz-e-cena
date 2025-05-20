import Logo from "../Logo";
import styles from "./Footer.module.css";

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src="../../../public/assets/logo/LogoBranca.png" alt="Logo"/>
        <p>Onde a realidade encontra a fantasia!</p>
    </div>
  )
}

export default FooterLogo;
