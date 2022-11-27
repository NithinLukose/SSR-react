import React from "react";

function Home() {
  return (
    <div>
      ssr Home component
      <button onClick={() => console.log("hello world")}>click</button>
    </div>
  );
}

export default Home;
