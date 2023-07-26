import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Anime from "./pages/Anime";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: ":id/anime",
    element: <Anime />
  }
])

export default router