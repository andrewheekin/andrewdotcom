import React from 'react';

export default () => {
  return (
    <div className="about">
      <div className="about-section">
        <h4>About</h4>
        <p>I'm originally from Atlanta and now live in Washington, DC, where I work as a web developer. Check out the 'projects' section to find out what I've working on recently.</p>
      </div>    
      <div className="about-section">
        <h4>Currently</h4>
        <p>Booz Allen Hamilton, Sr. Consultant/Software Engineer, Front End Developer on the <a href="http://disasterassistance.gov">DisasterAssitance.gov</a> website</p>
      </div>
      <div className="about-section">
        <h4>Past</h4>
        <p>Booz Allen Hamilton, Intern</p>
        <p>GE Energy, IT Leadership Program Intern</p>
      </div>
      <div className="about-section">
        <h4>School</h4>
        <p>BS, Systems Engineering, University of Virginia '14 - Capstone project: <a href="http://bit.ly/1M12TsD">http://bit.ly/1M12TsD</a></p>
        <p>Gymnasium Bei Sankt Stephan - Augsburg, Germany - I was an exchange student at a German high school during a gap year before college '09-'10 </p>
      </div>
      <div className="about-section">
        <h4>Technologies</h4>
        <p>Front end: Javascript (Angular, React, jQuery, Vanilla), Sass, Gulp, Webpack</p>
        <p>Back end: Python/Flask, Nodejs</p>
        <p>CI/CD: Docker</p>
      </div>
    </div>
  );
}