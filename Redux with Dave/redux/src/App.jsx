import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList"

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App
// redux do every operation is synchronous so to handle the asynchronous 
// you need a middleware like thunk