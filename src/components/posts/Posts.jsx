import React from "react";
import { useQuery } from "@tanstack/react-query";
import Post from "../post/Post";
import "./posts.scss";
import makeRequest from "../../axios";
import Share from "../share/Share";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );
  console.log(data);
  return (
    
    <div className="posts">
    <Share/>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading..."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
