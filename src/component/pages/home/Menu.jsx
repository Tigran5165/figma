import { FaHeart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export default function Menu() {

    const { menuArray, fetchMenuArray, updateLike, loading } = useContext(DataContext)

    useEffect(() => {
        fetchMenuArray();
    }, [])

    
    return (
        <div className={'flex flex-col gap-[70px] pt-[100px]'}>
            <div className={'flex flex-col items-center'}>
                <p className={'text-[48px]'}>Simple and tasty recipes</p>
                <p className={'opacity-[60%] w-[706px] text-center'}> Lorem ipsum dolor sit amet, consectetuipisicing
                    elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className={'grid grid-cols-3 gap-[30px] py-6 px-10'}>
                {
                    loading ? (<div>loading</div>) : (menuArray.map((item, i) =>
                    (
                        <div
                            key={i}
                            className={'flex p-7 flex-col gap-4 rounded-[30px] text-[24px]  relative'}
                            style={{
                                background: item.bg,
                            }}>
                            <Link to={`/category/${item.id}`}>
                                <img src={item.img} alt="" />
                            </Link>
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
                                <FaHeart className={item.like ? 'text-red-600' : 'text-gray-600'}
                                    onClick={() => {
                                        updateLike(item)
                                    }} />
                            </div>
                        </div>
                    )
                    ))
                }
                <div className={'col-start-3 row-start-2 flex items-center'}>
                    <img src="/images/menu9.svg" alt="" className="w-full" />
                </div>
            </div>

        </div>
    )

}