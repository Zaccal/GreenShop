import { Button } from '@/components/ui/button';
import { useState } from 'react';
import styles from './ProductCount.module.css';

type TypeProductCountOnChange = (count: number) => void;

interface IProductCount {
    initialCount?: number;
    onChange?: TypeProductCountOnChange;
    className?: string;
    classNameBtns?: string;
}

const ProductCount = ({
    initialCount = 1,
    onChange,
    className,
    classNameBtns
}: IProductCount) => {
    let [count, setCount] = useState(initialCount);

    const countHandler = (type: 'discount' | 'count') => {
        if (type === 'count') {
            setCount((prev) => (prev += 1));
            onChange && onChange((count += 1));
        } else if (count > 1) {
            setCount((prev) => (prev -= 1));
            onChange && onChange((count -= 1));
        }
    };

    return (
        <div className={`${className} ${styles.wrapper}`}>
            <Button
                className={`${classNameBtns} ${styles.button}`}
                onClick={() => countHandler('discount')}
            >
                <span>-</span>
            </Button>
            <span>{count}</span>
            <Button
                className={`${classNameBtns} ${styles.button}`}
                onClick={() => countHandler('count')}
            >
                <span>+</span>
            </Button>
        </div>
    );
};

export default ProductCount;
