import { TypeReactChildren } from '@/types/ReactChildren.type';
import styles from './HomeLayout.module.css';

interface IHomeLayout {
    children: TypeReactChildren;
}

const HomeLayout = ({ children }: IHomeLayout) => {
    return <div className={styles.layout}>{children}</div>;
};

export default HomeLayout;
