import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand ms-4" style={{fontWeight: "700" }} href="#">
            Mode UI
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav m-auto p-2">
            <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color: "#363C46", fontWeight: "600"}}
                >
                  Card access
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{color: "#363C46", fontWeight: "600"}}>
                  Banking
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color: "#363C46", fontWeight: "600"}}>
                  Processing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color: "#363C46", fontWeight: "600"}}>
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color: "#363C46", fontWeight: "600"}}>
                  Career
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color: "#363C46", fontWeight: "600"}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="me-3 px-2 border border-dark rounded" style={{backgroundColor: "#582066", color: "#ffffff"}}>
            Login &nbsp;
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
