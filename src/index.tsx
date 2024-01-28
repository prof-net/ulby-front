import ReactDOM from 'react-dom/client';
import App from './app/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {Suspense} from "react";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPages";
import {ContactPage} from "pages/ContactPages";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about/",
                element: <Suspense fallback={'...'}><AboutPage /></Suspense>,
            },
            {
                path: "contact/",
                element: <Suspense fallback={'...'}> <ContactPage /></Suspense>,
            },
        ]
    },
]);

root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>

);

