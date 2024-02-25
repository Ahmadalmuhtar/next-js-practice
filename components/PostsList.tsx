import React, { useContext } from "react";
import PostsContext from "./PostsContext";

const PostsList: React.FC = () => {
  const posts = useContext(PostsContext);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsList;
