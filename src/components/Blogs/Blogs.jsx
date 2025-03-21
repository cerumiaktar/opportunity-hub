import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    } ,[])
    return (
        <div>
            <h1 className='text-2xl font-medium text-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] py-10 mt-8 mb-8 rounded-lg'>Blogs</h1>
        </div>
    );
};

export default Blogs;