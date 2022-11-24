const express = require("express");
const React = require("react");
const rendorToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default;
const app = express();

app.get("/", (req, res) => {
  const content = rendorToString(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log("connected to port 3000");
});
