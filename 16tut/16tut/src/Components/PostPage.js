import { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { PostsContext } from "../App";

console.log(1 + 1);

function PostPage() {
  const { posts, handleDelete } = useContext(PostsContext); 
  const { id } = useParams();
  
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="Post">
        {post && (
          <>
            <h2> {post.title} </h2>
            <p className="postDate"> {post.datetime} </p>
            <p className="postBody"> {post.body} </p>
            <NavLink to={`/edit/${post.id}`}>
              <button className="updateBtn">Update Post</button>
            </NavLink>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <NavLink to="/">Visite Our home page</NavLink>
            </p>
          </>
        )}
      </article>
    </main>
  );
}

export default PostPage;
