import React, { Component } from 'react';
import sr from '../utils/scrollReveal.js';

export default class Contact extends Component {

  componentDidMount = () => {
    const config = {
      duration: 600,
      delay: 100,
      distance: '0px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.contact, config)
  }

  render() {
    return (
      <div ref='contact' className="contact">
        <ul>
          <li><h4>andrewheekin@gmail.com</h4></li>
          <li><h4><a href="https://github.com/andrewheekin">Github</a></h4></li>
          <li><h4><a href="https://www.linkedin.com/pub/andrew-heekin/48/24a/465">Linkedin</a></h4></li>
          <li><h4><a href="https://twitter.com/andrewheekin">Twitter</a></h4></li>          
        </ul>
      </div>
    );    
  }
}