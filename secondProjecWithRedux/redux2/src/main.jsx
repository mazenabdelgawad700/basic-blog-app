import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/Store.jsx";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPosts } from "./features/posts/PostsSlice.jsx";
// we fetch the posts and users form our api when the page is reloaded
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route  path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
);
