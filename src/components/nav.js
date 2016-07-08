import React, { Component } from 'react';
import { Link } from 'react-router'
import sr from '../utils/scrollReveal.js';

export default class Nav extends Component {

  componentDidMount = () => {
    const config = {
      duration: 600,
      delay: 300,
      distance: '0px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.nav, config)
  }

  render() {
    return (
      <div ref='nav' className="side-nav">
        <ul>
          <li><Link to="/">Projects</Link></li>      
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}