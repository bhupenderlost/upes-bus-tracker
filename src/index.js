import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import './Assets/Style/main.css'
import Dashboard from './Pages/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import Add from './Pages/Add';
import Buses from './Pages/Buses';
import Location from './Pages/Location';
import Student from './Pages/Student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/add-bus' element={<Add/>} />
          <Route path='/buses' element={<Buses/>} />
          <Route path='/location' element={<Location/>} />
          <Route path='/students' element={<Student/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
