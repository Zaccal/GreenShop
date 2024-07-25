import Container from '@/components/custom/Container/Container';
import Footer from '@/modules/Footer/Footer';
import Header from '@/modules/Header/Header';
import { TypeReactChildren } from '@/types/ReactChildren.type';
import styles from './Layout.module.css';

interface ILayout {
    children: TypeReactChildren;
}

const Layout = ({ children }: ILayout) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Container>{children}</Container>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
