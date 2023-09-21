import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonList from "./features/pokemon/PokemonList.tsx";
import PageNotFound from "./features/pokemon/PageNotFound.tsx";

import { Provider } from "react-redux";
import store from "./app/store/index.ts";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
