import React from 'react'
const Categories = [
    {
        img: "./img/Makeup1.png",
        title: "Makeup"
    },
    {
        img: "./img/Makeup2.png",
        title: "Lipstick"
    },
    {
        img: "./img/Makeup3.png",
        title: "Bath Products"
    },
    {
        img: "./img/Makeup4.png",
        title: "Bath Products"
    }

]
const Featured = () => {
    return (
        <div className='mt-16 px-32'>
            <h1 className='text-center font-normal text-3xl'>Featured Categories</h1>
            <p className='text-center mt-4 text-gray-600'>Give your customers insight into your product collection. Select imagery and name that relates to the product category.</p>
            <div className='mt-9 flex items-center justify-between gap-2'>
                {
                    Categories.map((item) => {
                        return <div id="box" className='w-[22%] cursor-pointer'>
                            <img src={item.img} alt="" className='w-full' />
                            <p className='text-center mt-3 text-gray-800 font-light text-[15px]'>{item.title}</p>
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default Featured
