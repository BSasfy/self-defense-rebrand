import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Womens from "./routes/classes/womens";
import Mixed from "./routes/classes/mixed";
import Trial from "./routes/trial";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "classes/womens",
        element: <Womens />,
      },
      {
        path: "classes/mixed-adult",
        element: <Mixed />,
      },
      // {
      //   path: "trial",
      //   element: <Trial />,
      // },
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
