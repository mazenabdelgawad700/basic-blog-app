import Post from "./Post"

function Feed({ posts }) {
  // const  = createContext(WidthContext);
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default Feed
