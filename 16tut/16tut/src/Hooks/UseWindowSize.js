import { useState, useEffect } from "react";
/* 
  This custom hooks used to control on the browser size on loading and fetching data 
  and it is much fastest than pure useEffect or useLayOut because it following the best 
  practice of the ES6 and React Official Documentaion.
  
  Developed by: Mazen Ahmed.
*/
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleSize();

    window.addEventListener("resize", handleSize);

    const cleanUp = () => {
      window.removeEventListener("resize", handleSize);
    }
    return cleanUp;
  }, [])
  return windowSize;
}

export default useWindowSize;