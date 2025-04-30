import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-[#f5f5f5] w-full mt-20  px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64 py-6'>
            <div className='flex items-center justify-center md:justify-between pt-14 flex-col-reverse  md:flex-row'>
                <div>
                    <h1 className='font-normal text-2xl cursor-pointer tracking-[5px] text-center md:text-left mt-12'>BOTIGA</h1>
                    <p className='mt-2 text-[16px] font-light opacity-85 text-center md:text-left'>Give your customers insight into your product collection.</p>
                </div>
                <div className='flex gap-16 w-[100%] md:w-[22%] justify-center md:justify-between '>
                    <ul className='flex flex-col pr-7 text-center md:text-end'>
                        <h1 className='text-[19px] font-normal opacity-85'>Quick links</h1>
                        <NavLink to={""} className='pt-4 opacity-85 text-[15px]'>Home</NavLink>
                        <NavLink to={"blog"} className='pt-4 opacity-85 text-[15px]'>Blog</NavLink>
                        <li className='pt-4 opacity-85 text-[15px]'>Shop</li>
                    </ul>
                    <ul className='flex flex-col pr-7 text-center md:text-end'>
                        <h1 className='text-[19px] font-normal opacity-85'>About</h1>
                        <li className='pt-4 opacity-85 text-[15px]'>Shipping</li>
                        <li className='pt-4 opacity-85 text-[15px]'>Terms</li>
                        <li className='pt-4 opacity-85 text-[15px]'>Policy</li>
                    </ul>
                </div>
            </div>
            <div className='w-full mt-16 flex items-center justify-center md:justify-between flex-wrap'>
                <div className='flex gap-6 '>
                    <i class="fi fi-brands-facebook cursor-pointer"></i>
                    <i class="fi fi-brands-instagram cursor-pointer"></i>
                    <i class="fi fi-brands-twitter-alt cursor-pointer"></i>
                </div>
                <p className='opacity-80 font-normal text-center'>© 2025 Botiga. Proudly powered by Botiga</p>
            </div>
        </footer>
    )
}

export default Footer
