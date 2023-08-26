import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Distributors from './pages/distributors';
import DistributorInfo from './pages/distributorinfo';
import Users from './pages/users';
import Userinfo from './pages/userinfo';
import AppManagement from './pages/appmanagement';
import Profile from './pages/profile';
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    path: "distributors",
    element: <Distributors/>,
  },
  {
    path: "distributorinfo",
    element: <DistributorInfo/>,
  },
  {
    path: "users",
    element: <Users/>,
  },
  {
    path: "userinfo",
    element: <Userinfo/>,
  },
  {
    path: "appmanagement",
    element: <AppManagement/>,
  },
  {
    path: "profile",
    element: <Profile/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
