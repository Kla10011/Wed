import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,} from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './error-page';
import UserCreate from './routes/UserCreate';
import Navbar from './Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar /><App /></div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "create",
    element: <div><Navbar /><UserCreate /></div>,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App />  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
