import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PastProjects from './pages/PastProjects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/PastProjects",
    element: <PastProjects/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
