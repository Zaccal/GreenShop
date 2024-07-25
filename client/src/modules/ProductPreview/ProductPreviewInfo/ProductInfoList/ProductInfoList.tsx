import { IProduct } from '@/types/Product.type';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import styles from './ProductInfoList.module.css';

interface IProductInfoList
    extends Pick<IProduct, 'sku' | 'categoriesId' | 'tags'> {}

const ProductInfoList = ({ sku, tags }: IProductInfoList) => {
    return (
        <ul className={styles.list}>
            <li>
                <span className={styles.subtitle}>SKU: </span>
                <span className={styles.title}>{sku}</span>
            </li>
            <li>
                <span className={styles.subtitle}>Categories: </span>
                <span className={styles.title}>Potter Plants</span>
            </li>
            <li>
                <span className={styles.subtitle}>Tags: </span>
                <span className={styles.title}>{tags.join(', ')}</span>
            </li>
            <li className={styles.share}>
                <span className={styles.share_social_media}>
                    Share this products:
                </span>
                <div className={styles.social_media}>
                    <a href="#">
                        <FaFacebookF />
                    </a>
                    <a href="#">
                        <FaTwitter />
                    </a>
                    <a href="#">
                        <FaLinkedinIn />
                    </a>
                    <a href="#">
                        <MdOutlineEmail />
                    </a>
                </div>
            </li>
        </ul>
    );
};

export default ProductInfoList;
