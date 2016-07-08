import React, { Component } from 'react';
import { Link } from 'react-router';
import sr from '../utils/scrollReveal.js';

export default class Header extends Component {
  
  componentDidMount = () => {
    const config = {
      origin: 'top',
      duration: 500,
      delay: 50,
      distance: '3px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.header, config)
  }

  render() {
    return (
      <div ref='header'>
        <Link to="/"><img className="andrew-img" src="../../img/andrew.jpg"></img></Link>
        <Link className="header-link" to="/"><div className="h1 main-header">andrew heekin</div></Link>
        <div className="social">
          <ul>
            <li><a href="https://github.com/andrewheekin"><i className="fa fa-lg fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/pub/andrew-heekin/48/24a/465"><i className="fa fa-lg fa-linkedin"></i></a></li>
            <li><a href="https://twitter.com/andrewheekin"><i className="fa fa-lg fa-twitter"></i></a></li>          
            <li><a href="mailto:andrewheekin@gmail.com"><i className="fa fa-lg fa-envelope"></i></a></li>
          </ul>
        </div>
        <hr/>
      </div>
    );
  }
}