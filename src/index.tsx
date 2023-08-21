import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./pages/ErrorPage";
import Films from "./routes/Films";
import Cartoons from "./routes/Cartoons";
import Serials from "./routes/Serials";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/films",
        element:<Films/>
      },
      {
        path:"/cartoons",
        element:<Cartoons/>
      },
      {
        path:"/serials",
        element:<Serials/>
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
