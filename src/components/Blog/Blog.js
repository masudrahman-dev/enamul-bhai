import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';
import {toast } from 'react-toastify';


const Blog = ({data,handleWatchTime,handleBookMark}) => {

// const handleMarkAsRead=()=>{
//     toast("Yes,you completed the blogs!");
//     };


    return (
        
            <div className="data-card card">
                    <div className="data-photo">
                        <img className='w-100' src={data.url} alt="" />
                    </div>
        
                    <div className="time d-flex justify-content-around align-items-center mt-3">
                        <img className='author-img' src={data.img} alt="" />
                        <h6 className='author-name'>{data.name}</h6>
                        <p>Watch Time : {data.watchTime} </p>
                        
                        <FontAwesomeIcon onClick={()=>handleBookMark(data)}  icon={faBookBookmark}/>
                    </div>
                    <p className='ms-5'>Data:{data.date}</p>
                    <h6 className='ms-5'>{data.title} </h6>
                    <button onClick={()=>handleWatchTime(data.watchTime)} className='btn btn-info w-25 mb-3'>Mark as read</button>
                </div>
        
    );
};

export default Blog;
