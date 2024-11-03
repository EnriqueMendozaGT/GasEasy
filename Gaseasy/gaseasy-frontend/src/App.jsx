// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';
import Combustibles from './pages/Combustibles';
import Clientes from './pages/Clientes';
import Empleados from './pages/Empleados';
import Reportes from './pages/Reportes';
import Pagos from './pages/Pagos';
import Facturas from './pages/Facturas';
import Facturasdata from './pages/facturasdata';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de Login */}
        <Route path="/login" element={<Login />} />
        {/* Rutas dentro del Dashboard */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Navigate to="/reportes" />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="empleados" element={<Empleados />} />
          <Route path="pagos" element={<Pagos />} />
          <Route path="combustibles" element={<Combustibles />} />
          <Route path="facturas" element={<Facturasdata/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

