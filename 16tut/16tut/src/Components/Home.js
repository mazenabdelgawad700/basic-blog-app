import { useContext } from "react";
import Feed from "./Feed";
import Loading from "./LoadingSymbol";
import { PostsContext } from "../App";

function Home() {
  const { posts, isLoading, fetchError, searchResults } =
    useContext(PostsContext);

  return (
    <main className="Home">
      {isLoading && <Loading />}
      {!isLoading && fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No Posts Yet!</p>
        ))}
    </main>
  );
}

export default Home;
