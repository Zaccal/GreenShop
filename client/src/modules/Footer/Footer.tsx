import Container from '@/components/custom/Container/Container';
import FooterCardInfo from './FooterCardInfo/FooterCardInfo';
import { Infos } from './dataas';
import styles from './Footer.module.css';
import FooterEmailForm from './FooterEmailForm/FooterEmailForm';
import FooterInfoBanner from './FooterInfoBanner/FooterInfoBanner';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterSocialMedioa from './FooterSocialMedia/FooterSocialMedioa';
import FooterPayWays from './FooterPayWays/FooterPayWays';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.container}>
                    {Infos.map((data) => (
                        <FooterCardInfo {...data} key={data.src} />
                    ))}
                    <div>
                        <h4 className="text-lg font-bold">
                            Would you like to join newsletters?
                        </h4>
                        <FooterEmailForm />
                        <p className="text-subtitle leading-[22px] text-[13px] mt-[17px]">
                            We usually post offers and challenges in newsletter.
                            We’re your online houseplant destination. We offer a
                            wide range of houseplants and accessories shipped
                            directly from our (green)house to yours!
                        </p>
                    </div>
                </div>
            </Container>
            <FooterInfoBanner />
            <Container>
                <div className={styles.container}>
                    <FooterLinks />
                    <div className="">
                        <FooterSocialMedioa />
                        <FooterPayWays />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
