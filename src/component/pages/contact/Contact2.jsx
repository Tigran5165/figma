export default function Contact2() {
    let contactArray = [
        {
            id: 1,
            name: 'How did you start out in the food industry?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.',
        },
        {
            id: 2,
            name: 'What do you like most about your job?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.',
        },
        {
            id: 3,
            name: 'Do you cook at home on your days off?ubject',
            img: '/images/img29.svg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.',
        },
        {
            id: 4,
            name: 'What would your advice be to young people looking to get their foot in the door?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.',
            date: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”',
        },
        {
            id: 5,
            name: 'What is the biggest misconception that people have about being a professional chef?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.',
        },

    ]
    return (
        <main className="w-full p-10 grid grid-cols-[1fr_25%]">
            <div>
                {
                    contactArray.map((item, i) => (
                        <div key={i} className="p-10 w-[75%] flex flex-col gap-5 ">
                            <p className="text-[24px] font-inter font-bold w-full">{item.name}</p>
                            <img src={item.img} alt="" />
                            <p className="text-[36px] font-inter font-bold w-[700px]" style={{
                                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%)'
                            }}>{item.date}</p>
                            <p className="text-[16px] opacity-[60%]">{item.desc}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col items-center gap-[60px] pt-10">
                <p className="font-inter text-[14px]">SHARE THIS ON:</p>
                <img src="/images/img30.svg" alt="" />
                <img src="/images/img31.svg" alt="" />
                <img src="/images/img32.svg" alt="" />
            </div>
        </main>
    )
}