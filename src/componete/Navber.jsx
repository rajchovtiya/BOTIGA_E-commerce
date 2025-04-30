import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from "lucide-react";


const Navber = () => {
    const [searchChak, SetSearchChak] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    function SowlSearchBaer() {
        SetSearchChak(!searchChak)
    }

    return (
        <nav className='px-3 sm:px-8 py-6 border black' >
            <div className=' flex items-center justify-between flex-row-reverse md:flex-row'>
                <ul className=' hidden md:flex space-x-6  font-medium '>
                    <NavLink to={""} className=' cursor-pointer font-light'>Home</NavLink>
                    <NavLink to={"/blog"} className=' cursor-pointer font-light'>Blog</NavLink>
                    <li className='cursor-pointer font-light'>Shop</li>
                    <li className='cursor-pointer font-light'>Contacy</li>
                </ul>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? " " : <Menu />}
                    </button>
                </div>
                <div id="Logo">
                    <h1 className='font-medium text-3xl cursor-pointer tracking-[5px]'>BOTIGA</h1>
                </div>

                <div id="icon" className='flex'>
                    {searchChak == false ? <div className="search w-11  px-3 cursor-pointer" onClick={SowlSearchBaer}>
                        <img src="/img/search-nav.png" alt="" />
                    </div>
                        : <div onClick={SowlSearchBaer} className="user w-11 px-3 cursor-pointer ">
                            <img src="/img/close.png" alt="" />
                        </div>
                    }

                    <div className="hidden md:flex space-x-6  font-medium user w-11 px-3 cursor-pointer"><img src="/img/user.png" alt="" /></div>
                    <div className="hidden md:flex space-x-6  font-medium user w-11 px-3 cursor-pointer relative">
                        <img src="/img/cart.png" alt="" />
                        <div className="cart_prodct absolute h-[8px] w-[8px] bg-red-600 border rounded-full text-white text-[10px] p-2 flex items-center justify-center top-[-10px] right-[1px]">0</div>
                    </div>

                </div>
            </div>
            {!searchChak ? "" : <div id='searchBaer' className='mt-28'>
                <div className=' flex items-center justify-center gap-2'>
                    <input type="text" placeholder='Search Products...' className='border border-black border-solid p-3 w-[600px]' />
                    <button className='bg-[#212121] p-4 px-[23px]'><img src="/img/search.png" alt="" className='w-5' /></button>
                </div>
            </div>}
            {/* Mobile Menu */}
            <ul className={`md:hidden mt-4 space-y-2 ease-in duration-500 top-0 p-5 bg-white h-screen w-[50%] text-gray-700 absolute z-50 font-medium ${isOpen ? 'left-0' : ' left-[-100%]'}`}>
                <button onClick={toggleMenu} className='absolute right-3'>
                    {isOpen ? <X /> : " "}
                </button>
                <li className=' cursor-pointer font-light'>Home</li>
                <li className='cursor-pointer font-light'>Blog</li>
                <li className='cursor-pointer font-light'>Shop</li>
                <li className='cursor-pointer font-light'>Contacy</li>
            </ul>


        </nav>
    )
}

export default Navber




// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navber = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     return (
//         <nav className="bg-white shadow-md px-4 py-3">
//             <div className="container mx-auto flex items-center justify-between">
//                 <div className="text-2xl font-bold text-blue-600">MySite</div>

//                 <div className="md:hidden">
//                     <button onClick={toggleMenu}>
//                         {isOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//                     <li><a href="#" className="hover:text-blue-600">Home</a></li>
//                     <li><a href="#" className="hover:text-blue-600">About</a></li>
//                     <li><a href="#" className="hover:text-blue-600">Services</a></li>
//                     <li><a href="#" className="hover:text-blue-600">Contact</a></li>
//                 </ul>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <ul className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">
//                     <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Home</a></li>
//                     <li><a href="#" className="block px-2 py-1 hover:text-blue-600">About</a></li>
//                     <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Services</a></li>
//                     <li><a href="#" className="block px-2 py-1 hover:text-blue-600">Contact</a></li>
//                 </ul>
//             )}
//         </nav>
//     );
// };

// export default Navber;
