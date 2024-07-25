import Rating from '@/components/custom/Rating/Rating';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IReview } from '@/types/Product.type';
import dateFormat from 'dateformat';
import { useState } from 'react';
import styles from './ReviewCard.module.css';
import { gotShortText } from './utils';

export interface IReviewCard extends Omit<IReview, 'id'> {
    createdAt: Date;
}

const now = new Date();

const ReviewCard = ({
    avatar,
    comment,
    createdAt,
    rating,
    username
}: Omit<IReviewCard, 'userId'>) => {
    const [isViewMore, setIsViewMore] = useState(false);
    const gotDate =
        dateFormat(createdAt, 'd') === dateFormat(now, 'd')
            ? 'Today'
            : dateFormat(createdAt, 'd mmmm');

    return (
        <Card className={styles.card}>
            <CardHeader className="px-0">
                <div className={styles.card_header}>
                    <div className={styles.user}>
                        <Avatar>
                            <AvatarImage src={avatar} />
                            <AvatarFallback>
                                {username.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className={styles.user_content}>
                            <span className="font-bold">{username}</span>
                            <span className="text-subtitle">
                                {gotDate} {`${dateFormat(createdAt, 'h:MM')}`}
                            </span>
                        </div>
                    </div>
                    <Rating value={rating} />
                </div>
            </CardHeader>
            <CardContent className="px-0">
                <p>
                    {gotShortText(comment, 70, isViewMore)}{' '}
                    {comment.length > 70 && (
                        <span
                            onClick={() => setIsViewMore((prev) => !prev)}
                            className="text-primary cursor-pointer"
                        >
                            {isViewMore ? 'Hide' : 'View more'}
                        </span>
                    )}
                </p>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;
