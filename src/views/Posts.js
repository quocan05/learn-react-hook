import React, { useEffect, useState } from "react";
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

  const [newData, setNewData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (dataPosts && dataPosts.length > 0) {
      let data = dataPosts.slice(0, 9);
      setNewData(data);
    }
  }, [dataPosts]);

  const handleAddNewPost = (post) => {
    let data = [...newData];
    data.unshift(post);
    setShow(false);
    setNewData(data);
    console.log(">>>check new Data: ", data);
  };

  const handleDelete = (id) => {
    setNewData(newData.filter((item) => item.id !== id));
  };
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
          <AddPost addNewPost={handleAddNewPost}></AddPost>
        </Modal.Body>
      </Modal>

      <div className="post-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((post) => {
            return (
              <div className="post" key={post.id}>
                <div className="post-title">{post.title}</div>

                <Link to={`${post.id}`}>
                  <Button>Show Detail</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                >
                  Delete
                </Button>
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
