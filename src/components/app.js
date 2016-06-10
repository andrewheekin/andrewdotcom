import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Nav from '../components/nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">    
          <div className="col-md-8 col-md-offset-2">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Nav />
          </div>   
          <div className="col-md-8">        
            {this.props.children}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
