import { NavLink, Outlet } from "react-router-dom";
import React from "react";


function Layout() {
  return (
    <div>
       
      <nav>
        <ul className="layout">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
  
}

export default Layout;