import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import WatchedList from "../pages/Shared/MyWatchList/WatchList/WatchedList";
import WatchingList from "../pages/Shared/MyWatchList/WatchList/WatchingList";
import WatchList from "../pages/Shared/MyWatchList/WatchList/WatchList";
import PageNotFound from "../pages/Shared/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/watchList", element: <WatchList /> },
      { path: "/watching", element: <WatchingList /> },
      { path: "/watched", element: <WatchedList /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
