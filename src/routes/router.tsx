import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RepositoryPage, MainPage} from "@/pages/";

const router = createBrowserRouter([{
    path: '/',
    element: <MainPage />,},
        {
            path: '/repository/:repoId',
            element: <RepositoryPage/>
        }

])

export const Router = () => <RouterProvider router={router}/>
