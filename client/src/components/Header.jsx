import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch}  from "react-redux"
import { logout } from "../redux/actions/authAction";

import brandLogo from "../images/justMe.png";

const Header = () => {
  const navLinks = [
    { label: "Home", icon: "home", path: "/" },
    { label: "Message", icon: "message", path: "/message" },
    { label: "Discover", icon: "public", path: "/discover" },
    { label: "Notify", icon: "notifications", path: "/notify" },
  ];
  const { auth, theme, notify } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
 
  const pathName = useLocation()
const isActive = (pn) =>  { if(pn===pathName) return 'active' }

  return (
    <nav className="navbar navbar-expand-lg bg-light justify-content-between align-middle">
      <div className="container-fluid">
        <Link tp="/" >
          <h1 className="navbar-brand text-uppercase">Just Me</h1>
        </Link>

        <div className="menu">
          <ul className="navbar-nav flex-row">
            {navLinks.map((link, index) => (
              <li className={`nav-item px-1 ${isActive(link.path)}`} key={index}>
                <Link className="nav-link" to={link.path}>
                  <span className="material-symbols-outlined">
                    {" "}
                    {link.icon}{" "}
                  </span>
                </Link>
              </li>
            ))}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                <span className="material-symbols-outlined"> account_circle </span> </span>
              <ul className="dropdown-menu">
                <li> <Link className="dropdown-item" to="/profile">  Profile </Link>{" "} </li>
                <label htmlFor="theme" className="dropdown-item">Dark Mode</label>
               
                <div className="dropdown-divider"></div>
                <li>  <Link
              className="dropdown-item"
              to="/"
              onClick={() => dispatch(logout())}
            >
               {theme ? <span ><ion-icon  name="exit-outline"></ion-icon> Sign-out</span>  : <span><ion-icon name="exit-outline"></ion-icon> Sign-out</span>}
            </Link> </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
