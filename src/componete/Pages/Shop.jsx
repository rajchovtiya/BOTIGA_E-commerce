import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('default');
    const [Chak, SetChak] = useState(null)


    useEffect(async () => {
        let blogdeta = await fetch('/deta/products.json')
        let detajson = await blogdeta.json()
        setProducts(detajson)
    }, []);

    const handleSort = (e) => {
        const value = e.target.value;
        setSort(value);

        const sorted = [...products].sort((a, b) => {
            console.log(f)
            if (value === 'low') return a.price - b.price;
            if (value === 'high') return b.price - a.price;
            return 0;
        });

        setProducts(sorted);
    };

    const showdeta = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };
    return (
        <div className='mt-16  px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64'>
            <div className='flex items-center justify-center flex-col mt-36'>
                <h1 className='text-7xl font-light'>Shop</h1>
                <p className='mt-6 max-w-[540px] text-center text-gray-600'>State the biggest use case of your product. Briefly expand on how this will help your customers.</p>
            </div>
            <div className='mt-36'>
                <div className="mb-4 w-full flex items-center justify-between">
                    <label className="mr-2 font-semibold">Sort by Price:</label>
                    <select onChange={handleSort} value={sort}>
                        <option value="default">Default</option>
                        <option value="low">Sort by price: low to high</option>
                        <option value="high">Sort by price: High to Low</option>
                        <option value="low">Sort by popularity</option>
                        <option value="low">Sort by average rating</option>
                        <option value="low">Sort by latest</option>


                    </select>
                </div>
                <hr className='w-full mt-6' />
                <div className='flex justify-center lg:justify-start 2xl:justify-between items-center mt-7 md:mt-10 flex-wrap gap-9 md:gap-4'>
                    {products.map(((item) => {
                        return <div key={item.id} id="cart" className=' h-[460px] mt-11 w-[345px] md:h-[450px] md:w-[300px] lg:h-[450px] lg:w-[420px] xl:w-[350px] xl:h-[545px] 2xl:w-[360px] 2xl:h-[540px] bg-white shadow-md rounded-md overflow-hidden'>
                            <div className=' relative h-[72%] md:h-[70%] lg:h-[60%] xl:h-[75%]'
                                onMouseMove={() => SetChak(item.id)} onMouseLeave={() => SetChak(null)}>
                                <NavLink to={"/Quickview"}>
                                    <img src={item.image} alt="" className={`h-full ease-in duration-500
                                     w-full object-cover cursor-pointer  ${Chak === item.id ? "opacity-70" : "opacity-100"}`} />
                                </NavLink>

                                {item.Sale === "true" ? <div className='absolute p-1 px-5 bg-black font-light text-white top-3 left-4'>SALE!</div> : " "}
                                <div className="absolute h-16 w-full flex items-center justify-center  top-[45%] overflow-hidden">
                                    <NavLink to={"/Quickview"} className={`bg-black ease-in duration-500 text-white p-2 px-5 relative ${Chak === item.id ? "top-[0%]" : "top-[100%]"}`}>QUICK VIEW</NavLink>
                                </div>
                            </div>

                            <div className='mt-4 flex flex-col items-center justify-center w-[full]'>
                                <a href="#"><p className='text-center text-sm'>{item.name}</p></a>
                                <div className="flex mt-2 items-center justify-center gap-3">
                                    {item.Sale === "true" ? <del className="text-gray-400 text-[14px]"><span>$</span><span>{item.Sale_price}.00</span></del> : " "}
                                    <h2 className="font-semibold"><span className='font-semibold'>$</span><span className="font-semibold">{item.price}.00</span></h2>
                                </div>
                                <button className="text-white p-2 px-4 bg-black mt-2 text-[14px]" onClick={() => showdeta(item)}>ADD TO CART</button>
                            </div>
                        </div>

                    }))}
                </div>
            </div>
        </div>
    );
}
