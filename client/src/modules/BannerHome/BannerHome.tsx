import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Banner1 from './Banners/Banner1/Banner1';
import { Pagination } from 'swiper/modules';

const BannerHome = () => {
    return (
        <div className="Banner">
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                initialSlide={1}
                loop
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <Banner1 />
                </SwiperSlide>

                <SwiperSlide>
                    <Banner1 />
                </SwiperSlide>

                <SwiperSlide>
                    <Banner1 />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerHome;
