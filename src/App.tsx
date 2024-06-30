import Header from "@/ui/Header/Header";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "@/pages/Main";
import Movie from "@/pages/movie";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "/movie/:id",
        element: <Movie/>
    }
]);

function App() {
    return <>
        <Header/>
        <RouterProvider router={router}/>

    </>

}

export default App
