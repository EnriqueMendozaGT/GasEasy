import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Facturas({ facturas = [] }) { // valor predeterminado para evitar errores
    console.log("Facturas:", facturas);
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Facturas</h2>
      <table className="table table-striped table-bordered shadow-sm">
        <thead className="table">
          <tr>
            <th>Número de Factura</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Monto Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {facturas.length > 0 ? (
            facturas.map((factura) => (
              <tr key={factura.numero}>
                <td>{factura.numero}</td>
                <td>{factura.cliente}</td>
                <td>{factura.fecha}</td>
                <td>${factura.montoTotal.toFixed(2)}</td>
                <td>
                  <span className={`badge ${factura.estado === 'Pagada' ? 'bg-success' : 'bg-warning'}`}>
                    {factura.estado}
                  </span>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">Ver</button>
                  <button className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No hay facturas disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Facturas;
