/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo, useRef } from "react";

const Button = memo(({ handelCount, title, className }) => {
  const reRenderRef = useRef(1);
  console.log(
    `you have re-render this component ${reRenderRef.current++} times`
  );
  return (
    <button onClick={handelCount} className={className}>
      {title}
    </button>
  );
});

export default Button;
