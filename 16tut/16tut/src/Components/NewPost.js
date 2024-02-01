import { useContext } from "react";
import { PostsContext } from "../App";

function NewPost() {
  const {
    postTitle,
    setPostTitle,
    setPostBody,
    postBody,
    handleSubmit,
  } = useContext(PostsContext);
  return (
    <mian className="NewPost">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} className="newPostForm">
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="Enter Post Title"
        />

        <label htmlFor="postBody">Body:</label>
        <textarea
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </mian>
  );
}

export default NewPost;

