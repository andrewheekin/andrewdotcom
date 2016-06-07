import React from 'react';
import { Link } from 'react-router'

export default () => {
  return (
    <div className="side-nav">
      <ul>
        <li><Link to="/">Projects</Link></li>      
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}