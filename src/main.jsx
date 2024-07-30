import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Class from "./routes/class";
import Trial from "./routes/trial";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "classes/:classId",
        element: <Class />,
      },
      {
        path: "trial",
        element: <Trial />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
);
