import Container from '@/components/custom/Container/Container';
import Logo from '@/modules/Header/Logo';
import { CiLocationOn } from 'react-icons/ci';
import { FiMail } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import styles from './FooterInfoBanner.module.css';

const FooterInfoBanner = () => {
    return (
        <div className={styles.FooterContainer}>
            <Container>
                <div className={styles.container}>
                    <Logo />
                    <div className={styles.info}>
                        <CiLocationOn
                            style={{
                                fontSize: '34px'
                            }}
                            className="text-primary"
                        />
                        <a href="#">
                            70 West Buckingham Ave. Farmingdale, NY 11735
                        </a>
                    </div>
                    <div className={styles.info}>
                        <FiMail
                            style={{
                                fontSize: '21px'
                            }}
                            className="text-primary"
                        />
                        <a href="mailto:#">contact@greenshop.com</a>
                    </div>
                    <div className={styles.info}>
                        <BsTelephone
                            style={{
                                fontSize: '21px'
                            }}
                            className="text-primary"
                        />
                        <a href="tel:#">+88 01911 717 490</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FooterInfoBanner;
