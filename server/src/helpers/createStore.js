import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../client/reducers";

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: "https://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" },
  });
  return createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
};
