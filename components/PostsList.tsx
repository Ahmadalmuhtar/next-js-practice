"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
}

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    function FetchPosts() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        setPosts(res.data);
        console.log(res);
      });
    }
    FetchPosts();
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
