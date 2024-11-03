import React, { useState, useEffect } from 'react';
import Facturas from './Facturas';

function Facturasdata() {
  // Ejemplo de datos de facturas
  const [facturas, setFacturas] = useState([
    { numero: 101, cliente: 'Juan Pérez', fecha: '2024-10-01', montoTotal: 150.75, estado: 'Pagada' },
    { numero: 102, cliente: 'Ana López', fecha: '2024-10-02', montoTotal: 200.00, estado: 'Pendiente' },
    // Agrega más facturas según lo necesites
  ]);

  return (
    <div>
      <Facturas facturas={facturas} />
    </div>
  );
}

export default Facturasdata;
