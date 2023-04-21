import React, { useEffect, useState } from 'react';
import './BlogCart.css';

const BlogCart = ({watchTime,blogTitle}) => {
    const [time,setTime] = useState(watchTime);
    useEffect(()=>{
        const getWatchTimeFromLocalStorage= localStorage.getItem("watchTime");
        setTime(getWatchTimeFromLocalStorage);
    },[watchTime]);

    return (
        <div className='cart'>
            
            <h4 className='text-center'>Spent time on read :{time}  <span>min</span></h4>
            <h4>Bookmarked Blogs :{blogTitle} </h4>
            
        </div>
    );
};

export default BlogCart;

