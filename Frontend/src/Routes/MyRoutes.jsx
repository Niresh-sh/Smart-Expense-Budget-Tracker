import { Route,Routes } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import React from "react";
import Dashboard from "../Pages/Dashboard";
import Layout from "../Components/Layout";


function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default MyRoutes;
