import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import About from 'pages/About/About'
import Error from 'pages/Error/Error'
import Home from 'pages/Home/Home'
import Projects from 'pages/Projects/Projects'

import './index.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "about/",
                element: <About />,
            },
            {
                path: "projects/",
                element: <Projects />,
            },
        ]
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
