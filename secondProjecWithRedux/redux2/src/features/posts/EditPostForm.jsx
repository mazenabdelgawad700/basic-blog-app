import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectPostById, updatePost } from "./postsSlice";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { selectAllUsers } from "../users/usersSlice";

const EditPostForm = () => {
  const { postId } = useParams();

  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");
  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
        <NavLink to="/" className="visiteHomePage">
          Viste Our Home Page
        </NavLink>
      </section>
    );
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChangegd = (e) => setUserId(Number(e.target.value));

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap(); // helps us to cathch the error, built on @reduxjs/toolkit
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (err) {
        console.log(`failed to save the post ${err}`);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const onDeleteClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({ id: post.id }));
      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (err) {
      console.log(`can not delete the element ${err}`);
    } finally {
      setRequestStatus("idle");
    }
  };

  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Edit Post</h2>
      <form action="">
        <label htmlFor="postTitle">PostTitle</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="p-2"
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          className="p-2"
          name="postAuthor"
          id="postAuthor"
          defaultValue={userId}
          onChange={onAuthorChangegd}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content</label>
        <textarea
          className="p-2"
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
          className="mt-2 btn btn-primary"
        >
          Save Post
        </button>
        <button
          type="button"
          onClick={onDeleteClicked}
          className="btn btn-danger mt-2"
        >
          Delete
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
