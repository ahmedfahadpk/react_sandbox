import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FullPost.css";
import axios from "axios";

const FullPost = () => {
  const [loadedPost, setLoadedPost] = useState();

  let { postId } = useParams();

  /* useEffect(() => {
    if (!loadedPost) {
      axios
        .get("http://jsonplaceholder.typicode.com/photos/" + postId)
        .then((response) => {
          console.log(response.data);
          setLoadedPost(response.data);
        });
    }
  });

  let postData = undefined;

  if (postId) {
    postData = <h1>Loading post</h1>;
  }

  if (loadedPost) {
    postData = (
      <div className="fullPost">
        <h1>Post {loadedPost.id}</h1>
        <p>{loadedPost.title}</p>
        <img src={loadedPost.thumbnailUrl} alt={loadedPost.title} />
      </div>
    );
  } */

  useEffect(() => {
    if (!loadedPost) {
      axios.get("http://localhost:3001/posts/" + postId).then((response) => {
        console.log(response.data);
        setLoadedPost(response.data);
      });
    }
  });

  let postData = undefined;

  if (postId) {
    postData = <h1>Loading post</h1>;
  }

  if (loadedPost) {
    postData = (
      <div className="fullPost">
        <h1>Post {loadedPost.id}</h1>
        <p>{loadedPost.title}</p>
        <img src={loadedPost.img} alt={loadedPost.title} />
      </div>
    );
  }

  return postData;
};

export default FullPost;
