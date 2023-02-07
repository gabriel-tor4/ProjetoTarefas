import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
function Footer() {
    return (<>
        <footer className={styles.footer}>
            <ul className={styles.ul}>
                <li className={styles.li} ><FaFacebook /></li>
                <li className={styles.li} ><FaInstagram /></li>
                <li className={styles.li} ><FaLinkedin /></li>
            </ul>
            <p><span>Gabriel Torquato</span>&copy;</p>

        </footer>


    </>)
}
export default Footer