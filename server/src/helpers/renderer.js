import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serializeJavascript from "serialize-javascript";
import Routes from "../client/Routes";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serializeJavascript(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </body>

    </html>`;
};
