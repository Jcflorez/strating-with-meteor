import React, { useState } from 'react';

export const Navbar = () => {

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-md bg-success" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> 
            <img 
              src="https://deportivocali.com.co/wp-content/uploads/2020/11/cropped-deportivo_cali_logo-2.png" 
              alt="" 
              width="40"
              height="20"
              className="img-fluid"
              /> 
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="RegAso.jsx">Reg Asociado</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ing Asamblea</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pantalla Quorum</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
