import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AboutLazy} from "./pages/About/About.lazy";
import {ContactLazy} from "./pages/Contact/Contact.lazy";
import {Suspense} from "react";
import ThemeProvider from "./theme/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about/",
                element: <Suspense fallback={'...'}><AboutLazy /></Suspense>,
            },
            {
                path: "contact/",
                element: <Suspense fallback={'...'}> <ContactLazy /></Suspense>,
            },
        ]
    },
]);

root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>

);

