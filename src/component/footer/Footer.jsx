export default function Footer() {
    return (
        <footer className={'grid grid-cols-3 justify-center gap-[40px] w-full pt-[150px] pr-5 pl-5 pb-5'}>
            <div className={'flex flex-col gap-5  justify-start'}>
                <img src="/images/image1.svg" alt="" className={'w-[110px]'}/>
                <p className={'grey text-start'}>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>
            <div className={'flex flex-row gap-7 col-start-3  justify-end'}>
                <p className={'font-inter'}>Recipies</p>
                <p className={'font-inter'}>Blog</p>
                <p className={'font-inter'}>Contact</p>
                <p className={'font-inter'}>About us</p>
            </div>
            <hr className={' col-start-1 col-end-4 row-start-2'}/>
            <div className={'flex flex-row justify-center col-start-2'}>
                <p className={'self-center'}>© 2020 Flowbase.Powered by <span className={'text-c1'}>Webflow</span></p>
            </div>
            <div className={'flex flex-row gap-5 justify-end'}>
                <img src="/images/image2.svg" alt=""/>
                <img src="/images/image3.svg" alt=""/>
                <img src="/images/image4.svg" alt=""/>
            </div>
        </footer>
    )
}