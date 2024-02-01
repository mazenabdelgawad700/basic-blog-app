/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useMemo, useState } from "react";

// type fibFunc = (n: number) => number;

// const myNumber: number = 37;

// const fib: fibFunc = (n) => {
//   if (n < 2) return n
//   console.log("re-renderd");
  
//   return fib(n - 1) + fib(n - 2);
// }

const UseStateHook = () => {
  const [count, setCount] = useState<number>(0);

  // useCallback used to memoize the function itself not the value
  const addtwo = useCallback(() => setCount(prev => prev + 2), []);

  
  // useMemo used to memoize the value not the function
  // const result = useMemo(() => fib(myNumber), []);
  

  // without useMemo  
  // const result = fib(myNumber);

  return (
    <>
      <h1>count is {count}</h1>
      <button onClick={addtwo}>+1</button>
      {/* <h3>{result}</h3> */}
    </>
  )
}

export default UseStateHook
