import { Swiper, SwiperSlide } from 'swiper/react';
import { instaArray } from '../../../entities/insta';

export default function Instagram() {
    return (
        <div className={'flex flex-col p-[70px] items-center gap-[30px]'}>
            <div className={'flex flex-col gap-[30px]'}>
                <p className={'w-[796px] text-[48px] font-inter'}>Check out @foodieland on Instagram</p>
                <p className={'opacity-[60%] w-[840px] text-center'}>Lorem ipsum dolor sit amet, consectetuipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='w-full'>
                <div className='w-full h-full'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        loop={false}
                    >
                        {instaArray.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className='w-max '>
                                    <img src={item.img} alt="" className='w-[350px] h-[445px]'/>
                                </div>
                            </SwiperSlide>

                        )
                        )}
                    </Swiper>
                </div>
            </div>
            <div className={'bg-black text-white flex flex-row gap-4 justify-center items-center w-[230px] rounded-lg p-4'}>
                <p>Visit Our Instagram</p>
                <img src="/images/insta5.svg" alt="" />
            </div>





        </div>
    )
}