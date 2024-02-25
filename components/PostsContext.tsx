import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
}

const PostsContext = createContext<Post[]>([]);

export const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};

export default PostsContext;
