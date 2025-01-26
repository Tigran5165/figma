// import abArray from "./abArray";


export default function AboutUs() {
    let inputArray = [
        {
            id: 1,
            name: 'Name',
            placeholder: 'Enter your name...'
        },
        {
            id: 2,
            name: 'EMAIL ADDRESS',
            placeholder: 'Your email address...'
        },
        {
            id: 3,
            name: 'Subject',
            placeholder: 'Your email address...'
        },
        {
            id: 4,
            name: 'ENquiry type',
            placeholder: 'Advertising'
        },

    ]
    return (
        <main className="p-5 w-full">
            <div className="flex flex-col justify-between p-5">

                <div className="w-full flex justify-center">
                    <p className="font-inter text-[64px] w-[315px]">Contact us</p>
                </div>

                {/* {
                    abArray.map((item, i) => (
                        <div key={i} className="p-10">
                            <img src={item.img} alt="" />


                        </div>
                    ))
                } */}
                <div className="grid grid-cols-[1fr_60%]">
                    <div className="p-10">
                        <img src="/images/img26.svg" alt="" className="w-[610px] h-[512px] rounded-lg" style={{
                            background: 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)'
                        }} />
                    </div>
                    <div >
                        <div className="grid grid-cols-2 gap-3 p-10">
                            {
                                inputArray.map((item, i) => (
                                    <div key={i} className='flex flex-col gap-3'>
                                        <p className="opacity-[60%] w-max">{item.name}</p>
                                        <input type="text"
                                            placeholder={item.placeholder}
                                            className="rounded-lg h-20 p-4 opacity[60%] border border-[#0000001A]"
                                        />
                                    </div>

                                ))
                            }

                            <div className='col-span-2 flex flex-col gap-3'>
                                <p className="opacity-[60%]">MESSAGES</p>
                                <textarea placeholder="Enter your messages..."
                                    className="w-full min-h-min max-h-[150px] text-start rounded-lg p-4 opacity[60%] border border-[#0000001A]" id=""></textarea>
                            </div>
                        </div>
                        <div className="w-full flex justify-start pl-10">
                            <button className=" px-12 py-5 bg-black text-[#FFFFFF] rounded-lg">
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}