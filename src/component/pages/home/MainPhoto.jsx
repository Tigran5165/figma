export default function MainPhoto() {
    return (<div className={'w-full h-min p-10 flex justify-center relative'}>
        <div className={'bg-c2  flex flex-col gap-4 p-[108px] rounded-l-[7%]'}>
            <div className={'bg-white w-[156px] rounded-full flex justify-center items-center p-3 gap-1'}>
                <img src="/images/image6.svg" alt=""/>
                <p>Hot Recipes</p>
            </div>
            <p className={'font-inter font-bold text-6xl w-[520px] text-start'}>Spicy delicious chicken wings</p>
            <p className={'w-[510px] opacity-[60%] text-c4'}>Lorem ipsum dolor sit amet, consectetuipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className={'flex flex-row gap-3'}>
                <div className={'bg-c3 w-[156px] rounded-full flex justify-center items-center p-3 gap-1'}>
                    <img src="/images/image7.svg" alt=""/>
                    <p>30 Minutes</p>
                </div>
                <div className={'bg-c3 w-[156px]  rounded-full flex justify-center items-center p-3 gap-1'}>
                    <img src="/images/image8.svg" alt=""/>
                    <p>Chiken</p>
                </div>
            </div>
            <div className={'flex flex-row gap-3 justify-between pr-9 pt-7'}>
                <div className={'w-[163px] flex flex-row  gap-1'}>
                    <img src="/images/image9.svg" alt=""/>
                    <div className={'flex flex-col text-start'}>
                        <p>John Smith</p>
                        <p className={'text-c4'}>15 March 2022</p>
                    </div>
                </div>
                <div
                    className={'rounded-lg bg-black flex flex-row text-white justify-center items-center px-5 gap-3'}>
                    <p>View Recipes</p>
                    <img src="/images/image10.svg" alt=""/>
                </div>
            </div>
        </div>
        <div className={'w-[640px] h-[622px]'} style={{
            backgroundImage: 'url(/images/image11.svg)',
            backgroundSize: '100% 100%'
        }}></div>
        <img src="/images/image12.svg" alt="" className={'absolute right-[42%] top-[15%]'}/>
    </div>)
}