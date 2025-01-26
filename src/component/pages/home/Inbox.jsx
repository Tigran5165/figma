export default function Inbox() {
    return (
        <div className="flex justify-center w-full  text-center px-20">
            <div className="flex flex-row bg-[#E7F9FD] rounded-[40px] p-20 w-full justify-center relative">
                <img src="/images/inbox2.svg" alt="" className="absolute left-[0%] bottom-0 rounded-[40px]" />
                <img src="/images/Photo-plate.png" alt="" className="absolute right-[0%] bottom-0 rounded-[40px]" />
                <img src="/images/inbox1.svg" alt="" className="absolute right-[20%] bottom-1/4 " />
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="flex flex-col gap-5">
                        <p className="font-inter text-5xl">Deliciousness to your inbox</p>
                        <p className="opacity-60 w-[620px]">Lorem ipsum dolor sit amet,
                            consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut
                            enim ad minim </p>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Your email address..."
                            className="w-[480px] rounded-lg h-20 p-4"
                        />
                        <button className="text-white w-40 bg-black absolute right-[5%] top-[10%] rounded-lg h-[60px]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}