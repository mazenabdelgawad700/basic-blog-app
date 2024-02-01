import { useContext, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { PostsContext } from "../App";

function UpdatePost() {
  const { posts, editBody, setEditBody, editTitle, setEditTitle, handleEdit } =
    useContext(PostsContext);
  
  const { id } = useParams();

  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <mian className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()} className="newPostForm">
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Enter Post Title"
            />

            <label htmlFor="postBody">Body:</label>
            <textarea
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Update Post
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <p>post is not found</p>
          <p>well, that is disappointed</p>
          <NavLink to="/">Visite our home page</NavLink>
        </>
      )}
    </mian>
  );
}

export default UpdatePost;
