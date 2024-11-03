// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../images/image.png'
import icon from '../../images/icon.png'

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticación
    navigate('/'); // Redirige al Dashboard después de iniciar sesión
  };

  return (
    <div className="login-container d-flex vh-100">
      <div className="login-form bg-white p-5 rounded shadow d-flex flex-column justify-content-center align-items-center">
      <div className="icon-img rounded-circle mb-3">
          <img src={icon} alt="" className="img-fluid" />
        </div>
        <h2 className="mb-4 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="form-padding w-100">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
          </div>
          <button type="submit" className="btn btn1 btn-primary w-100">Entrar</button>
        </form>
      </div>
      <div className="login-image" style={{ flex: '0 0 70%' }}>
        <img src={image} alt="Descripción de la imagen" className="rounded shadow" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  
  );
}

export default Login;
