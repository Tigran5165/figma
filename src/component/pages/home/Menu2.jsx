import { menu2Array } from "../../../entities/menu2Array";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Menu2({ isCheck, isAbout }) {
    const [menu, setMenu] = useState(menu2Array)

    function handleClick(i) {
        menu[i].like = !menu[i].like
        setMenu([...menu])
    }
    function checkCoun() {
        return isCheck ? 8 : 4
    }
    return (
        <div className={'flex flex-col p-10 '}>
            {isCheck ? <div className={'flex flex-row justify-between items-center gap-20 px-10'}>
                <p className={'text-[48px] '}>Try this delicious recipe
                    to make your day</p>
                <p className={'opacity-[60%]  '}> Lorem ipsum dolor sit amet, consectetuipisicing elit,
                    sed do eiusmod empor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
                : isAbout ? <div className="flex w-full justify-center">
                    <p className="font-inter w-[486] text-[36px]">Check out the delicious recipe</p>
                </div> :
                    <div className="flex w-full justify-center">
                        <p className="font-inter w-[486] text-[36px]">You may like these recipes too</p>
                    </div>
            }
            <div className={'grid grid-cols-4 gap-[30px] py-6'}>
                {
                    menu.slice(0, checkCoun()).map((item, i) => {
                        return (
                            <div
                            key={i}
                                className={'flex p-[40px] flex-col gap-4 rounded-[30px] text-[24px] relative'}>
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                                <div className={'flex flex-row gap-5 '}>
                                    <div className={'flex flex-row gap-2 text-[14px] opacity-[60%]'}>
                                        <img src="/images/image7.svg" alt="" />
                                        <p>30 Minutes</p>
                                    </div>
                                    <div className={'flex flex-row gap-2 text-[14px] opacity-[60%]'}>
                                        <img src="/images/image8.svg" alt="" />
                                        <p>{item.categories}</p>
                                    </div>
                                </div>
                                <div
                                    className={'bg-white rounded-full w-[48px]  h-[48px] flex justify-center items-center absolute right-[13%] top-[13%]'}>
                                    <FaHeart className={`${item.like ? 'text-red-600' : 'text-gray-600'}`}
                                        onClick={() => {
                                            handleClick(i)
                                        }} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}