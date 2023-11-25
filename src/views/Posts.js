import React, { useState } from "react";
import useFetch from "../custom/useFetch";
import { Button, Modal } from "react-bootstrap";
import "../style/Post.scss";
import { Link, useParams } from "react-router-dom";
import { AddPost } from "./AddPost.js";
export const Posts = () => {
  const {
    data: dataPosts,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, true);
  // console.log(dataPosts);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPost></AddPost>
        </Modal.Body>
      </Modal>

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
                <Button variant="danger">Delete</Button>
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
    </>
  );
};
