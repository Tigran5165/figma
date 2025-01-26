export default function Artists() {
    return (
        <main className="w-full p-5">
            <div className="flex flex-col justify-center items-center">
                <div className="w-full p-5 flex flex-col items-center gap-5">
                    <p className="font-inter w-[385px] text-[64px]">Blog & Article</p>
                    <p className="font-inter w-[840px] text-[16px] opacity-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
                <div className="relative w-[50%] p-5 flex flex-col items-center gap-5">
                    <input
                        type="text "
                        placeholder="Search article, news or recipe..."
                        className="w-full rounded-lg h-20 p-4 border" />
                    <button className="text-white w-40 bg-black absolute border right-[5%] top-[25%] rounded-lg h-[60px]">
                        Search
                    </button>
                </div>
            </div>
        </main>)
}