import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

import ThisWebsite from './projects/this-website';
import Dadjokebot from './projects/dadjokebot';
import PayTheRent from './projects/pay-the-rent';
import FlaskMetatag from './projects/flask-metatag';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Projects} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path="this-website" component={ThisWebsite} />
    <Route path="dadjokebot" component={Dadjokebot} />    
    <Route path="pay-the-rent" component={PayTheRent} />    
    <Route path="flask-metatag" component={FlaskMetatag} />
  </Route>
);