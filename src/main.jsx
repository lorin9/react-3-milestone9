import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Provider/AuthProvider';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
    {
   path:'/',
   element:<Home></Home>
    },
    {
   path:'/login',
   element:<Login></Login>
    },
    {
   path:'/register',
   element:<Register></Register>
    },
    {
      path:'/orders',
      element:<PrivateRoute> <Orders></Orders></PrivateRoute>
    },
    {
      path:'/profile',
      element:<PrivateRoute><Profile></Profile></PrivateRoute>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
