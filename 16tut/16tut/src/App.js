/* eslint-disable no-unused-vars */
import { Route, Routes, useNavigate } from "react-router-dom";

import {
  Nav,
  Home,
  Footer,
  About,
  NewPost,
  PostPage,
  Missing,
} from "./Components";

import { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./api/Posts";
import UpdatePost from "./Components/UpdatePost";
import useWindowSize from "./Hooks/UseWindowSize";
import useAxiosFetch from "./Hooks/UseAxiosFetch";

export const PostsContext = createContext();

function App() {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const { data, isLoading, fetchError } = useAxiosFetch(
    "http://localhost:3900/posts"
  );

  useEffect(() => {
    if (data.length > 0) {
      setPosts(data);
    }
  }, [data]);

  useEffect(() => {
    const filterdResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filterdResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (element) => {
    element.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd yyyy pp");
    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditBody("");
      setEditTitle("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <PostsContext.Provider
        value={{
          width,
          search,
          setSearch,
          posts,
          fetchError,
          isLoading,
          postTitle,
          setPostTitle,
          postBody,
          setPostBody,
          handleSubmit,
          editTitle,
          setEditTitle,
          editBody,
          setEditBody,
          handleEdit,
          handleDelete,
          searchResults,
        }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<UpdatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </PostsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
