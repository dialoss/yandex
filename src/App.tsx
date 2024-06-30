import Header from "@/ui/Header/Header";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Main from "@/pages/Main";
import Movie from "@/pages/movie";
import React from "react";

const Layout = () => (
    <>
        <Header/>
        <Outlet/>
    </>
);

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "/movie/:id",
                element: <Movie/>
            }
        ]
    },
]);

function App() {
    return <RouterProvider router={router}/>
}

export default App
