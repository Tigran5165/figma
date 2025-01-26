import { ingridientsArray } from "../../../entities/ingridients";
import { ingridients2 } from "../../../entities/ingridients2";
import { ingridients3 } from "../../../entities/ingridients3";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";


export default function Recipes() {
    const [ingridients, setIngridients] = useState(ingridients2)
    function setActive(i) {
        ingridients[i].icon = !ingridients[i].icon
        setIngridients([...ingridients])
    }
    const [ingridient, setIngridient] = useState(ingridients3)
    function setActive2(i) {
        ingridient[i].icon = !ingridient[i].icon
        setIngridient([...ingridient])
    }

    return (

        <main className="w-[100% p-5]">
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col p-5 gap-6 w-[70%]'}>
                    <p className="text-[32px] font-inter">Ingridients</p>
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <p className="text-[24px] font-inter w-[154px]">For main dish</p>
                            {ingridients.map((item, i) => (
                                <div className="flex flex-row gap-2 border-b border-[#0000001A] w-[100%] py-7" key={i} onClick={() => {
                                    setActive(i)
                                }}>
                                    <div className={`flex justify-center items-center w-[24px] h-[24px] rounded-full border border-black ${item.icon ? "bg-black" : "bg-white"}`}>
                                        <FaCheck className={"text-white"} />
                                    </div>
                                    <p className="text-[20px] font-inter">{item.icon ? <del className="color-black opacity-[60%]">{item.name}</del> : item.name}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-[24px] font-inter w-[154px]">For the sauce</p>
                            {ingridient.map((item, i) => (
                                <div className="flex flex-row gap-2 border-b border-[#0000001A] py-7 w-[100%]" key={i} onClick={() => {
                                    setActive2(i)
                                }}>
                                    <div className={`flex justify-center items-center w-[24px] h-[24px] rounded-full border border-black ${item.icon ? "bg-black" : "bg-white"}`}>
                                        <FaCheck className={"text-white"} />
                                    </div>
                                    <p className="text-[20px] font-inter">{item.icon ? <del className="color-black opacity-[60%]">{item.name}</del> : item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col justify-between h-full px-10 gap-20'}>
                    <div className="flex flex-col gap-5">
                        <p className="w-[188px] text-[32px] font-inter">Other Recipe</p>
                        {ingridientsArray.map((item, i) => (
                            <div key={i} className="flex flex-row gap-4">
                                <img src={item.img} alt="" className="rounded-lg  w-[180px]" />
                                <div className="flex flex-col gap-2">
                                    <p className="text-[20px] w-[196px] font-inter">{item.name}</p>
                                    <p className="text-[14px] font-inter opacity-[60%]">{item.categories}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src="/images/img9.svg" alt="" className="w-[400px]" />
                </div>
            </div>
        </main>
    )
}