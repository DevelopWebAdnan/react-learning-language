import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './layouts/MainLayout.jsx';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Register/Register.jsx';
import StartLearning from './pages/StartLearning/StartLearning.jsx';
import Tutorials from './pages/Tutorials/Tutorials.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Lesson from './pages/Lesson/Lesson.jsx';
import LessonCards from './components/LessonCards/LessonCards.jsx';
import MyProfile from './pages/MyProfile/MyProfile.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/startLearning",
        element: <StartLearning></StartLearning>,
        // loader: () => fetch("./vocabularies.json"),
        children: [
          {
            path: "/startLearning",
            element: <LessonCards></LessonCards>,
            loader: () => fetch("./vocabularies.json")
          }
        ]
      },
      {
        path: "/startLearning/:lesson",
        loader: () => fetch("../vocabularies.json"),
        element: <Lesson></Lesson>
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
        loader: () => fetch("./vocabularies.json"),
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
