import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import { direction2 } from "../../../entities/direction2";



export default function Direction() {
    const [directionVAlue, setDirectionValue] = useState(direction2)
    function update(i) {
        directionVAlue[i].icon = !directionVAlue[i].icon
        setDirectionValue([...directionVAlue])
    }
    return (
        <main className="w-[100% p-5]">
            <div>
                <p className="text-[32px] font-inter">Directions</p>
                {directionVAlue.map((item, i) => (
                    <div className="flex flex-col gap-5 border-b border-[#0000001A] w-[60%] p-7  text-start" key={i} onClick={() => (
                        update(i)
                    )}>
                        <div className="flex flex-row">
                            <div className={`flex justify-center items-center w-[24px] h-[24px] rounded-full border border-black ${item.icon ? "bg-black" : "bg-white"}`}>
                                <FaCheck className={"text-white"} />
                            </div>
                            <div className="flex flex-col gap-5 p-5">

                                <p className="text-[16px] w-[792px] font-inter opacity-[60%]">{item.icon ? <del className="color-black opacity-[60%]">{item.name}</del> : item.name}</p>
                                {i === 0 && <img src={item.img} alt="" className="w-[792px]" />}
                                <p className="text-[16px] w-[792px] font-inter opacity-[60%]">{item.desc}</p>
                            </div>
                           
                        </div>
                    </div>

                ))}
            </div>
        </main>
    )
}