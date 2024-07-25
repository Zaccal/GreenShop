import { Button } from '@/components/ui/button';
import ProductTotalRating from './ProductTotalRating/ProductTotalRating';
import ReviewCard, { IReviewCard } from './ReviewCard/ReviewCard';
import { Link } from 'react-router-dom';

const testUser: IReviewCard = {
    createdAt: new Date(),
    avatar: 'https://github.com/shadcn.png',
    comment:
        'Ура! Наконец-то нашла (по совету знакомой, которая ранее тоже покупала здесь) идеальные для меня наушники! Тестирую уже неск. месяцев и не нарадуюсь! Заряд держат почти бесконечно! Вот чесслово, я даже не помню, когда я их заряжала в последний раз! Громкость и качество звука - отменные. Даже приходится убавлять. И ещё важный момент (для меня) он не реагируют на прикосновение руки, если поправить в ухе!!! Прошлые просто бесили, так как требовали частой зарядки, отключались от прикосновения и хотелось погромче, а никак. Эти же - просто песня! В подарок пришел силиконовый чехол с карабином. Рекомендую однозначно!',
    rating: 4,
    userId: 1,
    username: 'Adil'
};

interface IProductReviews {
    id: number;
}

const ProductReviews = ({ id }: IProductReviews) => {
    return (
        <div className="mb-16">
            <ProductTotalRating avarageRating={4} totalReviews={10_000} />
            <div className="w-full h-full max-h-[1000px] mt-6 mb-6 overflow-hidden">
                <ReviewCard {...testUser} />
            </div>
            <Button asChild>
                <Link to={`/shop/product_reviews/${id}`}>View all reviews</Link>
            </Button>
        </div>
    );
};

export default ProductReviews;
