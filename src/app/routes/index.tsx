import Layout from "../ui/Layout";
import PostsPage from "../../pages/posts/PostsPage";
import PostPage from "../../pages/post/PostPage";
import NoMatch from "../ui/NoMatch";

export const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PostsPage />,
      },
      {
        path: "post",
        children: [
          {
            index: true,
            element: <PostPage />,
          },
          {
            path: ":postId",
            element: <PostPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];
