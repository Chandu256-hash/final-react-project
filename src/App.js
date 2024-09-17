import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Header/RootLayout';
import Home from './components/Body/Home/Home';
import AdminLogin from './components/Body/Admin/AdminLogin/AdminLogin';
import CompanyRegistration from './components/Body/Comapny/CompanyRegistration/CompanyRegistration';
import CompanyLogin from './components/Body/Comapny/CompanyLogin/CompanyLogin';
import StudentLogin from './components/Body/Student/StudentLogin/StudentLogin'
import StudentProfile from './components/Body/Student/StudentProfile/StudentProfile'
import StudentRegistration from './components/Body/Student/StudentRegistration/StudentRegistration'
import ContactUs from './components/Body/Home/ContactUs';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'companyregistration',
        element: <CompanyRegistration />,
      },
      {
        path: 'studentlogin',
        element: <StudentLogin />,
      },
      {
        path: 'studentprofile',
        element: <StudentProfile />,
      },
      {
        path: 'studentregistration',
        element: <StudentRegistration />,
      },
      {
        path: 'companylogin',
        element: <CompanyLogin />,
      },
      {
        path: 'adminlogin',
        element: <AdminLogin />,
      },
      {
        path:'contactus',
        element:<ContactUs />
      }
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
