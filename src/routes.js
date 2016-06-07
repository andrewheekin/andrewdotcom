import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Projects} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Route>
);