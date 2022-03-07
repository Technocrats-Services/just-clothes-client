import image from "../res/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap";

export default function Navbar() {
  return (
    // <nav className="navbar navbar-light bg-light">
    //   <a className="navbar-brand p-1 ms-1" href="/">
    //     <img
    //       src={image}
    //       width="150"
    //       height="30"
    //       class="d-inline-block align-top"
    //       alt=""
    //     />
    //   </a>
    //   {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul class="navbar-nav mr-auto">
    //       <li class="nav-item active">
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li class="nav-item active">
    //         <Link to="/item">Item</Link>
    //       </li>
    //       <li class="nav-item active">
    //         <Link to="/item/men">Item</Link>
    //       </li>
    //       <li class="nav-item active">
    //         <Link to="/item/women">Item</Link>
    //       </li>
    //     </ul>
    //   </div> */}
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
