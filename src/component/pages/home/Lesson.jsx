export default function Lesson() {
    return (
        <div className={'flex flex-row p-[40px] '}>
            <div className={'flex flex-col gap-[70px] w-[50%] justify-center'}>
                <div className={'flex flex-col gap-[30px]'}>
                    < p className={'text-[48px] w-[526px]'}>Everyone can be a
                        chef in their own kitchen</p>
                    <p className={'w-[508px]  opacity-[60%]'}>Lorem ipsum dolor sit amet, consectetuipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                    </p>
                </div>
                <div className={'bg-black w-[180px] flex justify-center items-center rounded-lg p-4'}>
                    <p className={'text-white'}>Learn More</p>
                </div>
            </div>
            <div className={'rounded-md'} style={{
                background: 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)'
            }}>
                <img src="/images/lesson1.svg" alt=""/>
            </div>
        </div>
    )
}