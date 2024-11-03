import "./Navbar.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";

function Navbar() {
  const handleLogout = () => {
    console.log("Cerrar sesión");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container-fluid">
        <div className="tittle navbar-brand">
          <span className="t1">Dash</span><span className="t2">board</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex me-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn2" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          {/** Perfil */}
          <div className="d-flex align-items-center position-relative">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="btn custom-btn">
                <FontAwesomeIcon icon={faUserCircle} size="lg" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="perfil shadow-sm">
                <Dropdown.Header className="text-center perfil-header">Perfil</Dropdown.Header>
                <Dropdown.ItemText>Nombre: Enrique Mendoza</Dropdown.ItemText>
                <Dropdown.ItemText>Email: enriquemendozagt@gmail.com</Dropdown.ItemText>
                <Dropdown.ItemText>Rango: Administrador</Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
