import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Search from "./pages/Search";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: ":id/anime",
    element: <Anime />
  },
  {
    path: "search",
    element: <Search />
  }
])

export default router