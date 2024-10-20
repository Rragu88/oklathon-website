import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AboutPage } from './pages/About.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { SponsorsPage } from './pages/Sponsors.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: '/sponsors',
    element: <SponsorsPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
