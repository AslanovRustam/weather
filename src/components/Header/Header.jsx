import React from "react";
import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import s from "./header.module.css";

function Header() {
  return (
    <>
      <header className={s.header}>
        <nav>
          <ul className={s.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? s.active : s.link)}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Header;
