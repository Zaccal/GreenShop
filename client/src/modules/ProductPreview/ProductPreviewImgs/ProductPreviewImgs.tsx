import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';
import { useEffect, useState } from 'react';
import styles from './ProductPreviewImgs.module.css';
import { TypeSetState } from '@/types/SetState.type';

interface IProductPreviewImgs {
    previews: string[];
    mainPreview: string;
    setCurrentPreview: TypeSetState<string>;
}

const ProductPreviewImgs = ({
    mainPreview,
    previews,
    setCurrentPreview
}: IProductPreviewImgs) => {
    const [imgs] = useState([mainPreview, ...previews]);
    const [currentImg, setCurrentImg] = useState(mainPreview);

    useEffect(() => {
        setCurrentPreview(currentImg);
    }, [currentImg, setCurrentPreview]);

    return (
        <>
            <div className={styles.previews}>
                {imgs.map((preview, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentImg(preview)}
                        className={styles.currentPreviewContainer}
                        style={{
                            border:
                                preview === currentImg
                                    ? '1px solid hsl(var(--primary))'
                                    : '1px solid transparent'
                        }}
                    >
                        <AsyncImage
                            url={`http://localhost:5000/api/${preview}`}
                            className={styles.currentPreview}
                            skiletonClassname={styles.currentPreviewSkilleton}
                            fallbackImageClassName={
                                styles.currentPreviewFallback
                            }
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductPreviewImgs;
