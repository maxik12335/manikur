import React  from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home";

const AppRouter = () => {
  
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path='*' element={<Navigate to={'/home'}/>}></Route>
    </Routes>
  )
}

export default AppRouter;