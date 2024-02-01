import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import LayOut from "./Components/LayOut";
import SinglePostPage from "./features/posts/SinglePostPage";
import UserPage from './features/users/UserPage'
import UsersList from './features/users/UsersList'
import { Routes, Route, Navigate } from "react-router-dom";
import EditPostForm from "./features/posts/EditPostForm";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        
        <Route path="user">
          <Route index element={<UsersList />}></Route>
          <Route path=":userId" element={<UserPage />}></Route>
        </Route>

        <Route path="*" element={<Navigate  to="/" replace />}  />

      </Route>
    </Routes>
  );
}

export default App;
