import styles from './FooterSocialMedia.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';

const FooterSocialMedioa = () => {
    return (
        <div>
            <h4 className={styles.title}>Social Media</h4>
            <div className={styles.container}>
                <a className={styles.social}>
                    <FaFacebookF />
                </a>
                <a className={styles.social}>
                    <FaInstagram />
                </a>
                <a className={styles.social}>
                    <FaTwitter />
                </a>
                <a className={styles.social}>
                    <FaLinkedinIn />
                </a>
                <a className={styles.social}>
                    <FaYoutube />
                </a>
            </div>
        </div>
    );
};

export default FooterSocialMedioa;
