/**
 * Asynchronously loads the component
 */
import * as React from "react";
import loadable from "../../utils/loadable";

export default loadable(() => import("./Feature"), {
  fallback: <div>Loading....</div>,
});
