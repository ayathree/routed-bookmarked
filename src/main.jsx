
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import Homies from './pages/Homies.jsx';
import Blog from './pages/Blog.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:'/',
            element:<Homies></Homies>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>,
            loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
            path:'/blog/:id',
            element:<Blog></Blog>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            children:[
                {
                    index: true,
                    element:<Content></Content>,
                    loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
                },
                {
                    path:'author',
                    element:<Author></Author>,
                    loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),

                }
            ]

        },
        {
            path:'/bookmarks',
            element:<Bookmarks></Bookmarks>
        }
        
      ]
    },
    
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
 
)
