/* @refresh reload */
import { Router, useRoutes } from "@solidjs/router";
import { render } from "solid-js/web";
import routes from "~solid-pages";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/600.css";
import "@fontsource/be-vietnam-pro/700.css";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./root.css";

render(() => {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <Routes />
    </Router>
  );
}, root!);
