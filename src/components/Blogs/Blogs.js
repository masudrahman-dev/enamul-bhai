
import Blog from "../Blog/Blog";

const Blogs = ({ data, handleWatchTime, handleBookMark }) => {
//   console.log(data);
  return (
    <div>
      <div className="data-container">
        {data.map((post) => (
          <Blog
            key={post.id}
            post={post}
            handleWatchTime={handleWatchTime}
            handleBookMark={handleBookMark}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
