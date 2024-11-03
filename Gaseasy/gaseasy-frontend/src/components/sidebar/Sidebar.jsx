// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faUsers,
  faUserTie,
  faChartLine,
  faCreditCard,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`sidebar ${
        isExpanded ? "expanded" : "collapsed"
      } d-flex flex-column p-3 text-black`}
    >
      <div className="nav d-flex align-items-center">
        <button
          onClick={toggleSidebar}
          className="toggle-btn btn"
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "0px solid white",
            marginRight: "10px",
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/reportes" className="btn text-center">
        <h4 className="text-tittle text-white"> {isExpanded && "GasEasy"}</h4>
        </Link>
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/combustibles" className="nav-link text-white">
            <FontAwesomeIcon icon={faGasPump} style={{ marginRight: "10px" }} />
            {isExpanded && "Combustibles"}
          </Link>
        </li>
        <li>
          <Link to="/clientes" className="nav-link text-white">
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: "10px", marginLeft:"-5" }} />
            {isExpanded && "Cliente"}
          </Link>
        </li>
        <li>
          <Link to="/empleados" className="nav-link text-white">
            <FontAwesomeIcon icon={faUserTie} style={{ marginRight: "10px" }} />
            {isExpanded && "Empleados"}
          </Link>
        </li>
        <li>
          <Link to="/reportes" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ marginRight: "10px" }}
            />
            {isExpanded && "Reportes"}
          </Link>
        </li>
        <li>
          <Link to="/pagos" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faCreditCard}
              style={{ marginRight: "10px" }}
            />
            {isExpanded && "Pagos"}
          </Link>
        </li>
        <li>
          <Link to="/facturas" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faFileInvoice}
              style={{ marginRight: "10px" }}
            />
            {isExpanded && "Facturas"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
