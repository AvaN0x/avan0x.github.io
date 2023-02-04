import React from 'react';
import ReactDOM from 'react-dom/client';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'components/AlertTemplate';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import DefaultLayout from 'layouts/DefaultLayout';
import ErrorPage from 'pages/error';
import Portfolio from 'pages/Portfolio';
import 'index.css';
import SetPageLanguages from 'pages/SetPageLanguages';
import DatabaseProvider from 'components/context/DatabaseProvider';
import Discord from 'pages/Discord';

const options = {
    position: positions.BOTTOM_RIGHT,
    transition: transitions.FADE,
    timeout: 5000,
    offset: '10px',
    containerStyle: {
        zIndex: 10000,
        bottom: 50,
    },
};

// We need to use a hash router otherwise github pages wouldn't
// be able to find the pages other than the home page
const router = createHashRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Portfolio />,
            },
            {
                path: '/discord',
                element: <Discord />,
            },
            {
                path: '/portfolio',
                element: <Navigate to="/" />,
            },
            {
                path: '/lang/:language',
                element: <SetPageLanguages />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <DatabaseProvider>
            <AlertProvider template={AlertTemplate} {...options}>
                <RouterProvider router={router} />
            </AlertProvider>
        </DatabaseProvider>
    </React.StrictMode>
);
