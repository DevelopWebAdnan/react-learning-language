import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Register/Register.jsx';
import StartLearning from './pages/StartLearning/StartLearning.jsx';
import Tutorials from './pages/Tutorials/Tutorials.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/startLearning",
        element: <StartLearning></StartLearning>
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      }
    ],
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "register",
    element: <Register></Register>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
