import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "../style/Post.scss";
import axios from "axios";
export const AddPost = (props) => {
  //console.log("Call add post");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmitForm = async () => {
    if (!title || !detail) {
      alert("you lost somewhere, try again!");
      return;
    }

    let newData = {
      title: title,
      body: detail,
      userId: 1,
    };
    //console.log("Check data get >>> title: ", title, ">>> detail: ", detail);
    let response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newData
    );
    if (response && response.data) {
      props.addNewPost(response.data);
    }
  };
  return (
    <>
      <div className="form-wrapper">
        <div className="form-body">
          <label className="label-form">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
          <label className="label-form">Detail:</label>
          <input
            type="text"
            value={detail}
            onChange={(event) => setDetail(event.target.value)}
          ></input>
          <Button
            className="btn-add-new"
            onClick={() => {
              handleSubmitForm();
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </>
  );
};
