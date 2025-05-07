import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Blog = () => {
    const [blogdeta, SetBlogdeta] = useState([])
    const [move, SetMove] = useState(null)

    useEffect(() => {
        const deta = async () => {
            let detas = await fetch("./deta/blogdeta.json")
            let bolgDetel = await detas.json()
            SetBlogdeta(bolgDetel.slice(0, 9))

        }
        deta()
    }, [])

    const detastro = (stroDeta) => {
        localStorage.setItem("Blog_title", JSON.stringify(stroDeta))
    }

    return (
        <div>
            <h5 className='text-center text-7xl font-light py-28'>Blog</h5>
            <div className=' px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64 flex flex-wrap gap-4 justify-between items-center'>

                {blogdeta.map((deta) => {
                    return (
                        <div key={deta.id} onClick={() => detastro(deta)} >
                            <div id="box" className='w-[320px]'
                                onMouseMove={() => SetMove(deta.id)}
                                onMouseLeave={() => SetMove(null)} >
                                <NavLink to={"/blogdetails"}>
                                    <img src={deta.img} alt="" className={`w-full cursor-pointer ease-in duration-300 object-cover ${move == deta.id ? "opacity-70" : "opacity-100"}`} />
                                </NavLink>
                                <p className='text-center mt-2 opacity-80 text-[14px] cursor-pointer'>{deta.deta}</p>
                                <p className='text-center mt-1 opacity-85 cursor-pointer'>{deta.title}</p>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Blog
