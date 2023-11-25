import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "../style/Post.scss";
export const AddPost = () => {
  //console.log("Call add post");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmitForm = () => {
    if (!title || !detail) {
      alert("you lost somewhere, try again!");
      return;
    }
    console.log("Check data get >>> title: ", title, ">>> detail: ", detail);
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
