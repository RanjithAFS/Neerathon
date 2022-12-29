import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import Search from "./Search";
import Menu from "./Menu";
import "../../styles/header.css";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header bg-light">
      <nav
        className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle"
      >
        <Link to="/" className="logo">
          <h1
            className="navbar-brand text-uppercase p-0 m-0"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            NEERATHON
          </h1>
        </Link>
        <Menu />
        <Search />
      </nav>
    </div>
  );
}

export default Header;
