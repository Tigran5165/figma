import { useParams } from "react-router-dom";
import { recipesArray } from "../../../entities/recipes";
import { recipes1Array } from "../../../entities/recipes1";
import { FiPrinter } from "react-icons/fi";
import { IoShareOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Recipes0() {
    const { id: recipesId } = useParams();
    const [menuArray, setMenuArray] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/menuArray/${recipesId}`)
            .then((response) => {
                setMenuArray(response.data);
            })
            .catch((error) => {
                console.error("Error Fetching data:", error);
            });
    }, []); 


    return (
        <main className="w-[100%]">
            <div className="flex flex-col p-5">
                <p className="text-[63px] font-inter w-[100%] pl-2">{menuArray.name}</p>
                <div className="flex justify-between">
                    <div className="flex gap-2 w-[50%] justify-between p-5">
                        {
                            recipesArray.map((item, i) => (
                                <div key={i} className={`${item.hr ? 'border-r border-[#0000001A] pr-10' : ''} flex gap-4 justify-center items-center`}>
                                    <img src={item.img} alt="" className={`${i === 0 ? 'w-[50px]' : 'w-[24px]'}`} />
                                    <div className="flex flex-col gap-2">
                                        <p className="font-inter text-[16px]">{item.name}</p>
                                        <p className="font-inter text-[14px] opacity-[60%]">{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex gap-5 pr-5">
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <button className="bg-[#E7FAFE] rounded-full p-7 w-min">
                                <FiPrinter className="text-[20px]" />
                            </button>
                            <p className="text-[12px] font-inter">PRINT</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <button className="bg-[#E7FAFE] rounded-full p-7 w-min">
                                <IoShareOutline className="text-[20px]" />
                            </button>
                            <p className="text-[12px] font-inter">SHARE</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-full h-[600px] p-10">
                {/* Uncomment and fix video source if needed */}
                {/* <video
                    autoPlay
                    muted
                    controls
                    loop
                    poster="https://www.youtube.com/embed/..."
                    className="rounded-lg">
                    <source src="/images/video.mp4" type="video/mp4" />
                </video> */}
                <img src={menuArray.img} alt="" />
                <div className="flex flex-col justify-between h-full p-5 rounded-lg bg-[#E7FAFE]">
                    <div className="flex flex-col gap-5">
                        <p className="text-[24px] font-inter">Nutrition Information</p>
                        {
                            recipes1Array.map((item, i) => (
                                <div key={i} className={`${item.hr ? 'border-b border-[#0000001A]' : ''} flex gap-4 items-center`}>
                                    <div className="flex justify-between gap-2 w-full px-5 py-3">
                                        <p className="text-[18px] opacity-[60%]">{item.name}</p>
                                        <p className="text-[18px] font-inter">{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <p className="opacity-[60%] w-[336px] text-center">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div>
                <p className="text-[16px] w-[1280px] font-inter opacity-[60%] p-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </main>
    );
}
