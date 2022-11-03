import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {

  return (
    <div className="header bg-light">
      <nav className="navbar navbar-expand-lg bg-light justify-content-between align-middle">
        <div className="container-fluid">
          <Link to="/" className="logo">
            <h1 className="navbar-brand text-uppercase">Just Me</h1>
          </Link>
          <Search />
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
