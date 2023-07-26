import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog, { loaderBlog } from "../pages/Blog";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";
import Post, { loaderPost } from "../pages/Post";
import LayoutAdmin from "../layouts/LayoutAdmin";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <LayoutPublic />,
      errorElement: <NotFound />,
      children: [
         {
            index: true,
            element: <App />,
         },
      ],
   },
   {
      path: "/",
      element: <LayoutAdmin />,
      errorElement: <NotFound />,
      children: [
         {
            index: true,
            element: <App />,
         },
         {
            path: "/blog",
            element: <Blog />,
            loader: loaderBlog,
         },
         {
            path: "/blog/:id",
            element: <Post />,
            loader: loaderPost,
         },
      ],
   },

]);
