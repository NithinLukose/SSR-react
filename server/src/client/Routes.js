import App from "./App";
import Home from "./pages/Home";
import UsersList from "./pages/UsersList";
import NotFoundPage from "./pages/NotFoundPage";
import Admins from "./pages/Admins";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        exact: true,
        ...Home,
      },
      {
        ...UsersList,
        path: "/users",
      },
      {
        ...Admins,
        path: "/admins",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
