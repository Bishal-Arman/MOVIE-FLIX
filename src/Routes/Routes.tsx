import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import WatchList from "../pages/Shared/MyWatchList/WatchList/WatchList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/watchList", element: <WatchList /> },
    ],
  },
]);
