import React, { Component } from 'react';
import sr from '../utils/scrollReveal.js';

export default class About extends Component {

  componentDidMount = () => {
    const config = {
      duration: 600,
      delay: 100,
      distance: '0px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.about, config)
  }
  
  render() {
    return (
      <div ref='about' className="about">
        <div className="about-section">
          <h4>About</h4>
          <p>I'm a software engineer in the Washington, DC area</p>
        </div>    
        <div className="about-section">
          <h4>Currently</h4>
          <p>I'm a software engineer at <a href="http://streetshares.com">StreetShares</a></p>
          {/*<p>I've worked at Booz Allen Hamilton since summer '14 as a frontend developer. 
          I currently work on the <a href="http://disasterassistance.gov">DisasterAssitance.gov</a> website. Previously I was
          developing a recommender system for the <a href="http://www.benefits.gov">Benefits.gov</a> website.</p>*/}
        </div>
        <div className="about-section">
          <h4>Technologies</h4>
          {/*<p>Javascript (Angular, React, Node), HTML/CSS/SASS, Python/Flask, Docker, MongoDB, Postgres, Redis, Git, AWS, DigitalOcean, NGINX, R</p>*/}
          <p>Javascript, HTML, CSS, Python, Linux, databases</p>          
        </div>      
        <div className="about-section">
          <h4>School</h4>
          <p>BS, Systems Engineering, University of Virginia '14</p>
        </div>
      </div>
    );
  }

}
