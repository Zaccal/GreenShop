import { IProduct } from '@/types/Product.type';
import Markdown from 'react-markdown';
import styles from './modest.module.css';

interface IProductDescription extends Pick<IProduct, 'fullDescription'> {}

const ProductDescription = ({ fullDescription }: IProductDescription) => {
    return <Markdown className={styles.markdown}>{fullDescription}</Markdown>;
};

export default ProductDescription;
