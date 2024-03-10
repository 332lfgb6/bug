import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Ls";
import Detail from "../pages/Detail";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);
