import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Notfound from "./Components/Notfound/Notfound";
import BlogDetail from "./Components/BlogDetail/BlogDetail";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "blog/:id",
            element: <BlogDetail />,
          },
          {
            path: "*",
            element: <Notfound />,
          },
        ],
      },
    ],
    {
      basename: "/Adasa",
    }
  );

  return <RouterProvider router={router} />;
}

export default App;