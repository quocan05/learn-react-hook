import React from "react";
import { useParams } from "react-router-dom";

export const DetailPost = () => {
  let { id } = useParams();
  console.log(">>>check params: ", useParams());
  return <div>DetailPost get with id : {id} </div>;
};
