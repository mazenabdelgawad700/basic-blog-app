import { Outlet } from "react-router-dom";
import Header from "./Header";
/*
it is supported in react-router-dom v6 
the Outlet component allow us to handle the constant components rendering rather than 
make it in the app.jsx and make it more complex you can just render <Outlet /> 
*/
const LayOut = () => {
  return (
    <> 
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LayOut
