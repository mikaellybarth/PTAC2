import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './Home/Home.jsx';
import Todo from './todo/todo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/todo' element={<Todo/>}></Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
