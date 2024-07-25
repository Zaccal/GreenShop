import styles from '../Footer.module.css';

export interface IFooterCardInfo {
    src: string;
    title: string;
    subtitle: string;
}

const FooterCardInfo = ({ src, subtitle, title }: IFooterCardInfo) => {
    return (
        <div className={styles.infoCard}>
            <img src={src} alt={title} />
            <h4 className="text-lg font-bold mt-4">{title}</h4>
            <p className="text-subtitle leading-[22px] text-md max-w-[204px]">
                {subtitle}
            </p>
        </div>
    );
};

export default FooterCardInfo;
