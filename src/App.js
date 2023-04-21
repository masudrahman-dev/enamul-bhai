import { useEffect, useState } from "react";
import "./App.css";
import BlogCart from "./components/BlogCart/BlogCart";
import Blogs from "./components/Blogs/Blogs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // side bar books mark
  const [bookMark, setBookMark] = useState([]);
  const handleBookMark = (mark) => {
    // const localData = JSON.parse(localStorage.getItem("cart-data"));

    // if (localData) {
    //   const newArr = [...bookMark, localData, mark];
    //   setBookMark(newArr);
    //   localStorage.setItem("cart-data", JSON.stringify(newArr));
    // } else {
    //   const newArr = [...bookMark, mark];
    //   setBookMark(newArr);
    //   localStorage.setItem("cart-data", JSON.stringify(newArr));
    // }
    const newArr = [...bookMark, mark];
    setBookMark(newArr);
    localStorage.setItem("cart-data", JSON.stringify(newArr));
  };

  return (
    <div className="mt-5">
      <div className="main row">
        <div className="home-container col-md-8">
          <Blogs
            data={data}
            handleWatchTime={handleWatchTime}
            handleBookMark={handleBookMark}
          ></Blogs>
        </div>
        <div className="cart-container col-md-4 card">
          <BlogCart watchTime={watchTime} bookMark={bookMark}></BlogCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
