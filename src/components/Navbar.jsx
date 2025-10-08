import React from "react";
//import della parte di componenti di navigazione per routing
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <NavLink to="/ChiSiamo">Chi Siamo</NavLink>
        </li>
        <li>
          <NavLink to="/Prodotti">Prodotti</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
