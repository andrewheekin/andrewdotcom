import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <Header />
        <Footer />
      </div>
    );
  }
}
