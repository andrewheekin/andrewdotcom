import React from 'react';

export default () => {
  return (
    <div className="about">
      <div className="about-section">
        <h4>About</h4>
        <p>I'm originally from Atlanta and now live in Washington, DC, working as a developer.
        Here are some <a href="/">projects</a> I've done.</p>
      </div>    
      <div className="about-section">
        <h4>Currently</h4>
        <p>I've worked at Booz Allen Hamilton since summer '14 as a front end developer. 
        I currently work on the <a href="http://disasterassistance.gov">DisasterAssitance.gov</a> website. Previously I was
        developing a recommender system for the <a href="http://www.benefits.gov">Benefits.gov</a> website.</p>
      </div>
      <div className="about-section">
        <h4>Technologies</h4>
        <p>Javascript (angular, react, node), python, docker</p>
      </div>      
      <div className="about-section">
        <h4>School</h4>
        <p>BS, Systems Engineering, University of Virginia '14</p>
      </div>
    </div>
  );
}