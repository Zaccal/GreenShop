import { IBlogCard } from '@/types/BlogCard.type';
import styles from './BlogSection.module.css';
import BlogCard from './BlogCard/BlogCard';

const blogDatas: IBlogCard[] = new Array(4);
const blogData: IBlogCard = {
    id: 2,
    picture: '8e804ddc-a611-4757-bc56-6733c181f654.jpg',
    readIn: '2',
    title: 'Top 10 Succulents for\nYour Home',
    subtitle: 'Best in hanging baskets. Prefers medium to high light.',
    userId: 1,
    createdAt: '2024-03-07T18:14:43.545Z'
};
blogDatas.fill(blogData);

const BlogSection = () => {
    return (
        <section className="pt-[138px]">
            <h2 className={styles.title}>Our Blog Posts</h2>
            <p className={styles.subtitle}>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
            </p>
            <div className="grid grid-cols-4 gap-11">
                {blogDatas.map((data) => (
                    <BlogCard {...data} key={data.id} />
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
