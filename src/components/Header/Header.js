import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="Films"></NavLink>
        </li>
        <li>
          <NavLink exact to="Characters"></NavLink>
        </li>
        <li>
          <NavLink exact to="Books"></NavLink>
        </li>
      </ul>
    </div>
  );
}
