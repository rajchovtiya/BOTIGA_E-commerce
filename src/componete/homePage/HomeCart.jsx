import React, { useState } from 'react'

const prodact = [
    {
        id: 1,
        name: "Deep Sweep 2% BHA Pore Cleaning Toner",
        price_ikn: "$",
        price: 21.00,
        Sale: "true",
        Sale_price: "16.00",
        image: "./img/botal1.webp"
    },
    {
        id: 2,
        name: "Eternal Sunset Collection Lip and Cheek",
        price_ikn: "$",
        price: 12.00,
        Sale: "false",
        Sale_price: "",
        image: "./img/botal2.webp"
    },
    {
        id: 3,
        name: "Facial Treatment Essence (Pitera Essence)",
        price_ikn: "$",
        price: 18.00,
        Sale: "false",
        Sale_price: "",
        image: "./img/botal3.webp"
    }

]

export default function HomeCart() {
    const [Chak, SetChak] = useState(null)

    return (
        <div className='mt-16  px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64'>
            <div>
                <h1 className='text-center text-2xl text-[#212121]'>Featured Collection</h1>
                <p className='text-center mt-2 text-[#343d3f]'>A powerful headline about your product’s features to give focus to your chosen product collection</p>
                <div className='flex justify-center lg:justify-between 2xl:justify-between items-center mt-7 md:mt-10 flex-wrap gap-9 md:gap-4'>
                    {
                        prodact.map((item) => {
                            return <div key={item.id} id="cart" className=' h-[460px] w-[345px] md:h-[450px] md:w-[300px] lg:h-[350px] lg:w-[220px] xl:w-[325px] xl:h-[500px] 2xl:w-[360px] 2xl:h-[540px] bg-white shadow-md rounded-md overflow-hidden'>
                                <div className=' relative h-[72%] md:h-[70%] lg:h-[60%] xl:h-[75%]' onMouseMove={() => SetChak(item.id)} onMouseLeave={() => SetChak(null)}>
                                    <img src={item.image} alt="" className={`h-full ease-in duration-500
                                      w-full object-cover cursor-pointer  ${Chak === item.id ? "opacity-70" : "opacity-100"}`} />
                                    {item.Sale === "true" ? <div className='absolute p-1 px-5 bg-black font-light text-white top-3 left-4'>SALE!</div> : " "}
                                    <div className="absolute h-16 w-full flex items-center justify-center  top-[45%] overflow-hidden">
                                        <a className={`bg-black ease-in duration-500
                                             text-white p-2 px-5 relative ${Chak === item.id ? "top-[0%]" : "top-[100%]"}`}>QUICK VIEW</a>
                                    </div>
                                </div>

                                <div className='mt-4 flex flex-col items-center justify-center w-[full]'>
                                    <a href="#"><p className='text-center text-sm'>{item.name}</p></a>
                                    <div className="flex mt-2 items-center justify-center gap-3">
                                        {item.Sale === "true" ? <del className="text-gray-400 text-[14px]"><span>$</span><span>{item.Sale_price}.00</span></del> : " "}
                                        <h2 className="font-semibold"><span className='font-semibold'>$</span><span className="font-semibold">{item.price}.00</span></h2>
                                    </div>
                                    <button className="text-white p-2 px-4 bg-black mt-2 text-[14px]">ADD TO CART</button>
                                </div>
                            </div>

                        })
                    }
                </div>
            </div>
        </div>
    )
}
