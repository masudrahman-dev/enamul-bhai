import { useEffect, useState } from "react";
import "./App.css";
import BlogCart from "./components/BlogCart/BlogCart";
import Blogs from "./components/Blogs/Blogs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import BooksMark from "./components/BookMarks/BooksMark";

function App() {
  // fetch data
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // count time
  const [watchTime, setWatchTime] = useState(" ");
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));

    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };
  // book mark count
  const [blogCount, setBlogCount] = useState(0);
  // side bar books mark
  const [bookMark, setBookMark] = useState([]);
  const handleBookMark = (mark) => {
    const newArr = [...bookMark, mark];
    setBookMark(newArr);
    setBlogCount(blogCount + 1);
    console.log(mark);
  };

  return (
    <div className="mt-5">
      <div className="main row">
        <div className="home-container col-md-8">
          <Blogs data={data} handleWatchTime={handleWatchTime}></Blogs>
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
