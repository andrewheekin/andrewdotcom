import React from 'react';
import { Link } from 'react-router'

export default () => {
  return (
    <div>
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