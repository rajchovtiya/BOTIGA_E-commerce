import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='relative w-full h-[570px] '>
                <img src="/img/Heroc.webp" alt="" className='h-full w-full object-cover' />
                <div className="absolute top-[27%]  px-32 ">
                    <h2 className='text-6xl max-w-[60%] text-[#212121] font-normal leading-[1.1]'>Headline that grabs people’s attention</h2>
                    <button className='p-3 px-4 bg-[#222222] text-white hover:opacity-85 mt-7 text-[12px]'>SHOP NOW</button>
                </div>
            </div>

        </div>
    )
}
