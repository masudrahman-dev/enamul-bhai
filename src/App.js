import { useState } from 'react';
import './App.css';
import BlogCart from './components/BlogCart/BlogCart';
import Blogs from './components/Blogs/Blogs';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import BooksMark from './components/BookMarks/BooksMark';

function App() {
  const[watchTime,setWatchTime] = useState(" ");

  const handleWatchTime=(time)=>{
    
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    
    if(previousWatchTime){
     const sum = previousWatchTime + time;
     localStorage.setItem("watchTime",sum);
     setWatchTime(sum);
    }else{
        localStorage.setItem("watchTime",time);
        setWatchTime(time);
    }
  };

  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
            <Blogs handleWatchTime={handleWatchTime}></Blogs>
        </div>
        <div className="cart-container col-md-4 card">
            <BlogCart watchTime={watchTime}></BlogCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
