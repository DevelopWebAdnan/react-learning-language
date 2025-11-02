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
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile.jsx';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword.jsx';

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
        loader: () => fetch("/vocabularies.json"),
      },
      {
        path: "/startLearning/lessons",
        element: <LessonCards></LessonCards>,
      },
      {
        path: "/startLearning/lessons/:lesson",
        loader: () => fetch("/vocabularies.json"),
        element: <PrivateRoute><Lesson></Lesson></PrivateRoute>
      },
      {
        path: "/tutorials",
        element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
        // loader: () => fetch("/vocabularies.json"),
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
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>
      },
      // {
      //   path: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
      // }
      // {
      //   path: "/id/:id/vocabularyPronounce",
      //   loader: () => fetch("/vocabularies.json"),
      //   element: <VocabularyPronounce></VocabularyPronounce>
      // }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
