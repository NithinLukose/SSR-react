import React from "react";

function NotFoundPage({ staticContext = {} }) {
  staticContext.notFound = true;
  return (
    <div>
      <h1>not found</h1>
    </div>
  );
}

export default {
  component: NotFoundPage,
};
