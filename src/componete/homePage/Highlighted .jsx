import React from 'react'

function Highlighted() {
    return (
        <div className='mt-24 relative'>
            <img src="./img/hbg-1.webp" alt="" className='object-cover h-[320px]  md:h-[300px] lg:h-[450px] w-full' />
            <div className='flex items-center justify-center flex-col absolute h-full w-full top-0 px-8'>
                <h2 className='font-normal text-3xl'>Highlighted Section</h2>
                <p className='mt-4 mb-8 text-[#212121] text-[14px] text-center'>What differentiates you from the competition? Use this section to talk about it. Don’t forget to talk about the benefits.</p>
                <button className='p-4 px-5 bg-black text-white text-[14px] hover:bg-[#555555] ease-in duration-200'>SHOP NOW</button>
            </div>

        </div>
    )
}

export default Highlighted 
