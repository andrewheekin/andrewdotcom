import React, { Component } from 'react';
import ProjectList from '../components/project-list';
import sr from '../utils/scrollReveal.js';

const projects = [
  {
    "title":"This website",
    "url":"/this-website",
    "author":"Andrew Heekin",
    "date":"5 JUNE 2016",
    "description":"The site is hosted with AWS S3 static hosting. The view is generated with react.js and \
      webpack bundles all javascript. React-router provides simple routing functionality for"
  },{
    "title":"Dadjokebot",
    "url":"/dadjokebot",
    "author":"Andrew Heekin",
    "date":"7 MAY 2016",    
    "description":"This project is a python flask application using the twilio package. I added a landing \
      page as a link in the response sms to collect analytics data. The landing page is a static site \
      that makes"
  },{
    "title":"Pay the rent",
    "url":"/pay-the-rent",
    "author":"Andrew Heekin",
    "date":"25 JANUARY 2016",    
    "description":"The pay-the-rent application collects monthly rent through venmo's api.The AP Scheduler \
      package runs the payment cron jobs, the python requests package posts charges. BeautifulSoup parses"
  },{
    "title":"Flask metatag",
    "url":"/flask-metatag",
    "author":"Andrew Heekin",
    "date":"30 DECEMBER 2015",    
    "description":"Python flask api that uses the python newspaper package to output the open graph \
      information (title, description,"
  }
];

export default class Projects extends Component {

  componentDidMount = () => {
    const config = {
      duration: 600,
      delay: 300,
      distance: '0px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.projects, config)
  }

  render() {
    return (
      <div ref='projects'>
        <ProjectList projects={projects} />
      </div>
    );    
  }
}