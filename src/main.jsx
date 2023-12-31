import "./utils/darkMode";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <UserProvider>
         <RouterProvider router={router} />
      </UserProvider>
   </React.StrictMode>
);
