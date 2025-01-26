import { categoryArray } from "../../../entities/categoryArray";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Category() {
    return (
        <div className={'flex p-4 flex-col'}>
            <div className={'flex  flex-row justify-between text-start px-10 gap-5'}>
                <p className={'text-6xl font-inter'}>Categories</p>
                <div className={'bg-[#E7FAFE] w-[200px] rounded-lg flex justify-center p-3 font-inter items-center '}>
                    <p>View All Categories</p>
                </div>
            </div>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {categoryArray.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={'flex pt-20 flex-col justify-center items-center p-[30px] rounded-[30px] gap-3 font-inter'} style={{
                                    background: item.bg,
                                }}>
                                    <img className={'w-[100px] h-[100px]'} src={item.img} alt="" />
                                    <p className={'text-[18px]'}>{item.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })

                    }
                </Swiper>
            </div>
        </div>

    )
}