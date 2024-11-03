// src/pages/Dashboard.jsx
import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-4">
      <Navbar/>
        <div className="panel p-4">
          <Outlet />
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
