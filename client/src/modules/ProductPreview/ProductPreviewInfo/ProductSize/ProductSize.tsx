import styles from './ProductSize.module.css';

export type TypeProductSize = 'S' | 'M' | 'L' | 'Xl';
type TypeOnChangeProductSize = (size: TypeProductSize) => void;

interface IProductSize {
    initialValue?: TypeProductSize;
    onChange?: TypeOnChangeProductSize;
    className?: string;
}

const sizes: TypeProductSize[] = ['S', 'M', 'L', 'Xl'];

const ProductSize = ({
    initialValue = 'S',
    onChange,
    className
}: IProductSize) => {
    return (
        <div className={styles.wrapper}>
            {sizes.map((sizeData) => (
                <div
                    key={sizeData}
                    onClick={() => onChange && onChange(sizeData)}
                    style={{
                        border:
                            initialValue === sizeData
                                ? '1px solid hsl(var(--primary))'
                                : '1px solid #eaeaea'
                    }}
                    className={`${className} ${styles.sizeContainer}`}
                >
                    <span
                        style={{
                            color:
                                initialValue === sizeData
                                    ? 'hsl(var(--primary))'
                                    : '#727272',
                            fontWeight:
                                initialValue === sizeData ? '700' : '500'
                        }}
                    >
                        {sizeData}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ProductSize;
