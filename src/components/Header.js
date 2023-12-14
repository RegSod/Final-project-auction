/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
      <h1>Auction & Fleemarket</h1>

      <ul>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/Flee">Fleemarket</NavLink>
        </li>
        <li>
          <NavLink to="/Auction">Auction</NavLink>
        </li>
      </ul>
    </nav>
  )
}

