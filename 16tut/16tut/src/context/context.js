// /* eslint-disable no-unused-vars */
// import { createContext, useState, useEffect } from "react";
// import { format } from "date-fns";
// import api from "../api/Posts";
// import UpdatePost from "../Components/UpdatePost";
// import useWindowSize from "../Hooks/UseWindowSize";
// import useAxiosFetch from "../api/UseAxiosFetch";
// import { useNavigate } from "react-router-dom";

// const DataContext = createContext({});

// export const DataProvider = ({ children }) => {
//   const [posts, setPosts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [postTitle, setPostTitle] = useState("");
//   const [postBody, setPostBody] = useState("");
//   const [editBody, setEditBody] = useState("");
//   const [editTitle, setEditTitle] = useState("");
//   const navigate = useNavigate();
//   const { width } = useWindowSize();

//   const { data, isLoading, fetchError } = useAxiosFetch(
//     "http://localhost:3900/posts"
//   );

//   useEffect(() => {
//     if (data.length > 0) {
//       setPosts(data);
//     }
//   }, [data]);

//   useEffect(() => {
//     const filterdResults = posts.filter(
//       (post) =>
//         post.body.toLowerCase().includes(search.toLowerCase()) ||
//         post.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setSearchResults(filterdResults.reverse());
//   }, [posts, search]);

//   const handleSubmit = async (element) => {
//     element.preventDefault();
//     const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//     const datetime = format(new Date(), "MMMM dd yyyy pp");
//     const newPost = {
//       id,
//       title: postTitle,
//       datetime,
//       body: postBody,
//     };
//     try {
//       const response = await api.post("/posts", newPost);
//       const allPosts = [...posts, response.data];
//       setPosts(allPosts);
//       setPostTitle("");
//       setPostBody("");
//       navigate("/");
//     } catch (err) {
//       console.error(`Error: ${err.message}`);
//     }
//   };

//   const handleEdit = async (id) => {
//     const datetime = format(new Date(), "MMMM dd yyyy pp");
//     const updatedPost = {
//       id,
//       title: editTitle,
//       datetime,
//       body: editBody,
//     };
//     try {
//       const response = await api.put(`/posts/${id}`, updatedPost);
//       setPosts(
//         posts.map((post) => (post.id === id ? { ...response.data } : post))
//       );
//       setEditBody("");
//       setEditTitle("");
//       navigate("/");
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/posts/${id}`);
//       const postsList = posts.filter((post) => post.id !== id);
//       setPosts(postsList);
//       navigate("/");
//     } catch (err) {
//       console.error(`Error: ${err.message}`);
//     }
//   };

//   <DataContext.Provider
//     value={
//       {
//         width,
//       }
//     }
//   >
//     {children}
//   </DataContext.Provider>;
// };

// export default DataContext;
