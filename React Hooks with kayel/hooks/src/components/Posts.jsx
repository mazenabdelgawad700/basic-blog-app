import { useState, useTransition, useDeferredValue } from "react";

const Posts = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [ispending, startTransition] = useTransition();
  const deferredCount = useDeferredValue(count);
  const handleClick = () => {
    // urgent update
    setCount((prev) => prev + 1);

    // non-urgent update
    startTransition(() => {
      const myArr = Array(20000)
      .fill(1)
      .map((_, i) => count + 20000 - i);
      setItems(myArr);
    })
  };

  return (
    <main>
      <button onClick={handleClick}>{count}</button>
      {ispending && <p>Loading...</p>}
      <p>Deferred: {deferredCount} </p>
      <ul>
        {items.map((item) => {
          return <li key={item}>Item #{item} </li>;
        })}
      </ul>
    </main>
  );
};

export default Posts;
