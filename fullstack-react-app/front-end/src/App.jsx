import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ArticlePage, { loader as articleLoader } from './pages/ArticlePage.jsx';
import ArticlesListPage from './pages/ArticlesListPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Layout from './Layout.jsx';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',

        element: <HomePage />,
      },
      {
        path: '/about/',
        element: <AboutPage />,
      },
      {
        path: '/articles',
        element: <ArticlesListPage />,
      },
      {
        path: '/articles/:name',
        element: <ArticlePage />,
        loader: articleLoader,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
