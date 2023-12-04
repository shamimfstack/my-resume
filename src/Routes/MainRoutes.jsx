import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from '../Pages/Error/ErrorPage'
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services/Services";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact/Contact";


const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default MainRoutes;