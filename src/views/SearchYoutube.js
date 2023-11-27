import React, { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import "../style/Search.scss";
import axios from "axios";
import moment from "moment/moment";
export const SearchYoutube = () => {
  const [videos, setVideos] = useState([]); // save videos array
  const [query, setQuery] = useState("");

  const handleClickSearch = async () => {
    let response = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyCeDiFbIdyc3k6Qvfx8sWCaj5QZ38IVcUQ",
        type: "video",
        q: query,
      },
    });

    if (response && response.data.items) {
      //console.log("Check data response >>>>>", response.data);
      let raw = response.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let obj = {};
          obj.id = item.id.videoId;
          obj.title = item.snippet.title;
          obj.channel = item.snippet.channelTitle;
          obj.uploadTime = item.snippet.publishedAt;
          obj.description = item.snippet.description;
          result.push(obj);
        });
      }
      setVideos(result);
    }
  };

  return (
    <>
      <div className="search-bar">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search"
            //aria-label="Recipient's username"
            //aria-describedby="basic-addon2"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button
            className="btn-search"
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleClickSearch}
          >
            Search
          </Button>
        </InputGroup>
      </div>
      {videos &&
        videos.length > 0 &&
        videos.map((video) => {
          return (
            <div className="search-result" key={video.id}>
              <div className="left">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{video.title}</div>
                <div className="channel">{video.channel}</div>
                <div className="upload-time">
                  uploaded {moment(video.uploadTime).format("ll")}
                </div>
                <div className="description">{video.description}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};
