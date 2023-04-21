import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BlogCart from '../BlogCart/BlogCart';
import BooksMark from '../BookMarks/BooksMark';


const Blogs = ({handleWatchTime}) => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
            .then(res =>res.json())
            .then(data =>setData(data));
    },[]);

    const[bookMark,setBookMark]=useState([]);
    const[blogCount,setBlogCount]=useState(0);

    const handleBookMark=(mark)=>{
    const newArr = [...bookMark,mark];
    setBookMark(newArr);
    setBlogCount(blogCount + 1);
};

    return (
        <div>
           
            <div className="data-container">
               
               {
                data.map(data =><Blog
                handleWatchTime={handleWatchTime}
                key={data.id}
                data={data}
                handleBookMark={handleBookMark}

                ></Blog>)
               }
            </div>
            
            {
               bookMark.map(b =><BlogCart
               title={b.blogTitle}
               ></BlogCart>)     
            }

            {/* {
                bookMark.map(b =><BooksMark
                    title={b.blogTitle}
                    handleBookMark={handleBookMark}
                ></BooksMark>)
            } */}
        </div>
    );
};

export default Blogs;
                    

