import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='relative w-full h-[270px] prodact_img md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]'>
                <img src="/img/Heroc.webp" alt="" className='h-full w-full object-cover' />
                <div className="absolute top-[27%]   px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64 z-30">
                    <h2 className='text-2xl max-w-[60%] text-[#212121] font-normal leading-[1.1] md:text-5xl xl:text-6xl'>Headline that grabs people’s attention</h2>
                    <button className='p-3 px-4 bg-[#222222] text-white hover:opacity-85 mt-7 text-[12px]'>SHOP NOW</button>
                </div>
            </div>

        </div>

    )
}
