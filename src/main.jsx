import { StrictMode } from 'react'
import { createRoot} from "react-dom/client";
import App from './App'
import Done from './assets/Components/Done'
import NotDone from './assets/Components/NotDone'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import TodoItem from './assets/Components/TodoItem';
import AllToDo from './assets/Components/AllToDo';
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path='AllTodo' element={<AllToDo/>}/>
    <Route path='Done' element={<Done/>}/>
    <Route path='NotDone' element={<NotDone/>}/>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
