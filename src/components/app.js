import React, { Component } from 'react';

import Header from '../components/header';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <Header />
        <Projects />
        <Footer />
      </div>
    );
  }
}
