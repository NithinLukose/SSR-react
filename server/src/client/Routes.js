import App from "./App";
import Home from "./pages/Home";
import UsersList from "./pages/UsersList";

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
    ],
  },
];
