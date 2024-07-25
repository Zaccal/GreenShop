import Container from '@/components/custom/Container/Container';
import Logo from './Logo';
import styles from './Header.module.css';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderOptions from './HeaderOptions/HeaderOptions';

const Header = () => {
    return (
        <header className="mb-6">
            <Container>
                <div className={styles.header_body}>
                    <Logo />
                    <HeaderNav />
                    <HeaderOptions />
                </div>
            </Container>
        </header>
    );
};

export default Header;
