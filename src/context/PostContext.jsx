import { createContext, useContext, useState } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const clearSelectedPost = () => setSelectedPost(null);

  const value = { selectedPost, setSelectedPost, clearSelectedPost };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export const usePostContext = () => useContext(PostContext);

export default PostProvider;
