import React, { useState, useEffect } from 'react'

const Blog = () => {
    const [blogdeta, SetBlogdeta] = useState([])
    useEffect(() => {
        const deta = async () => {
            let detas = await fetch("./deta/blogdeta.json")
            let a = await detas.json()
            SetBlogdeta(a.slice(0, 9))

        }
        deta()
    }, [])

    return (
        <div>
                
                
        </div>
    )
}

export default Blog
