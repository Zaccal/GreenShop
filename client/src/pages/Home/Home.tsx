import Advertisement from '@/modules/Advertisement/Advertisement';
import BannerHome from '@/modules/BannerHome/BannerHome';
import BlogSection from '@/modules/BlogSection/BlogSection';
import HomeLayout from '@/modules/HomeLayout/HomeLayout';
import HomeProductsPreview from '@/modules/HomeProductsPreview/HomeProductsPreview';
import Sidebar from '@/modules/Sidebar/Sidebar';

const Home = () => {
    return (
        <>
            <BannerHome />
            <HomeLayout>
                <div className="col-span-1">
                    <Sidebar />
                </div>
                <div className="col-start-2 col-end-5">
                    <HomeProductsPreview />
                </div>
            </HomeLayout>
            <Advertisement />
            <BlogSection />
        </>
    );
};

export default Home;
