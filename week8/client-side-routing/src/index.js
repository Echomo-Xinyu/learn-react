import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './routes';
import Contact from './routes/contact';
import Root from './routes/Root';
import "bootstrap/dist/css/bootstrap.css";
import Posts from './routes/Posts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetch(
            "https://jsonplaceholder.typicode.com/posts?_expand=user"
          ).then((response) => {
            return response.json();
          });
        }
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/posts/:postId",
        element: <Posts />,
        loader(loaderData) {
          return fetch(
            `https://jsonplaceholder.typicode.com/${loaderData.postId}?_expand=user&_embed=comments`
          ).then((response) => {
            return response.json();
          });
        }
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // commented out section cause the log to be printed twice during dev mode, but not in prod mod
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
