import AsyncImage from '@/components/custom/AsyncImage/AsyncImage';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from '@/components/ui/card';
import { IBlogCard } from '@/types/BlogCard.type';
import dateFormat from 'dateformat';
import { BsArrowRight } from 'react-icons/bs';
import { minLength } from '../utils';
import styles from './BlogCard.module.css';

const BlogCard = ({
    title,
    subtitle,
    picture,
    readIn,
    createdAt
}: Omit<IBlogCard, 'userId' | 'id'>) => {
    return (
        <Card>
            <CardHeader className={styles.header}>
                <AsyncImage
                    url={`http://localhost:5000/api/${picture}`}
                    className="w-full h-full"
                    fallbackImageClassName="h-full "
                    skiletonClassname={styles.skilleton}
                />
            </CardHeader>
            <CardContent className={styles.cardContent}>
                <p className={styles.time}>
                    {dateFormat(createdAt, 'mmmm d')} | Read in {readIn} minutes
                </p>
                <h4 className={styles.title}>{minLength(title, 8)}</h4>
                <p className={styles.subtitle}>{minLength(subtitle, 9)}</p>
            </CardContent>
            <CardFooter className="bg-muted ">
                <a href="#" className={styles.btn}>
                    ReadMore <BsArrowRight />
                </a>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
