import React from "react";
import useFetch from "../custom/useFetch";
import { Button } from "react-bootstrap";
import "../style/Post.scss";
import { Link, useParams } from "react-router-dom";
const Posts = () => {
  const {
    data: dataPosts,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`);
  // console.log(dataPosts);

  return (
    <div className="post-container">
      {isLoading === false &&
        dataPosts &&
        dataPosts.length > 0 &&
        dataPosts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="post-title">{post.title}</div>

              <Link to={`${post.id}`}>
                <Button>Show Detail</Button>
              </Link>
            </div>
          );
        })}

      {isLoading === true && (
        <div
          className="loading-status"
          style={{ textAlign: "center !important", width: "100%" }}
        >
          Loadinggggg.......
        </div>
      )}
    </div>
  );
};

export default Posts;
