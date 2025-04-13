import { StrictMode } from 'react'
import { createRoot} from "react-dom/client";
import App from './App'
import "./index.css";
import Done from './assets/Components/Done.jsx'
import NotDone from './assets/Components/NotDone.jsx'
import AllToDo from './assets/Components/AllToDo.jsx';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path='/AllTodo' element={<AllToDo/>}/>
    <Route path='/Done' element={<Done/>}/>
    <Route path='/NotDone' element={<NotDone/>}/>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
