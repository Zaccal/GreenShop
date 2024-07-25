import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';
import { ImgHTMLAttributes, ReactElement, useEffect, useState } from 'react';
import { CiImageOff } from 'react-icons/ci';
import styles from './AsyncImage.module.css';

interface IAsyncImage extends ImgHTMLAttributes<HTMLImageElement> {
    url: string;
    fallbackImageClassName?: string;
    fallbackChildren?: ReactElement;
    skiletonClassname?: string;
}

const AsyncImage = ({
    url,
    fallbackImageClassName,
    skiletonClassname,
    fallbackChildren,
    ...props
}: IAsyncImage) => {
    const [isImageloaded, setIsImageLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const response = await axios.get(url, {
                    responseType: 'blob'
                });
                const blob = new Blob([response.data], {
                    type: response.headers['content-type']
                });
                URL.createObjectURL(blob);

                setIsImageLoaded(true);
            } catch (error) {
                // console.error('Ошибка при загрузке изображения:', error);
                setIsError(true);
            }
        };

        loadImage();
    }, [url]);

    return (
        <>
            {isImageloaded ? (
                <img
                    {...props}
                    src={url}
                    onLoad={() => setIsError(false)}
                    onError={() => setIsError(true)}
                />
            ) : isError ? (
                <div className={`${fallbackImageClassName} ${styles.fallback}`}>
                    {fallbackChildren ? fallbackChildren : <CiImageOff />}
                </div>
            ) : (
                <Skeleton
                    className={`${skiletonClassname} bg-gray-300 w-[250px] h-[250px]`}
                />
            )}
        </>
    );
};

export default AsyncImage;
