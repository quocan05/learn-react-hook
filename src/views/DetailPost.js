import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../custom/useFetch";
import { Button } from "react-bootstrap";

export const DetailPost = () => {
  let { id } = useParams();
  console.log(">>>check params: ", useParams());
  let { data: detailPost, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    false
  );

  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/posts");
  };
  return (
    <>
      <div className="post-detail-container">
        <Button
          onClick={() => {
            handleBack();
          }}
        >
          Back
        </Button>
        <div className="post-title">
          Post id: {id}{" "}
          {isLoading === true ? "Loading data...." : detailPost.title}
        </div>
        <div className="post-body"> Post detail:{detailPost.body}</div>
      </div>
    </>
  );
};
