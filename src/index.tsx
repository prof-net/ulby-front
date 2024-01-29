import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import React from "react";
import {ThemeProvider} from "app/providers/ThemeProvider";

import {router} from "shared/config/routeConfig/routeConfig";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);



root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>

);

