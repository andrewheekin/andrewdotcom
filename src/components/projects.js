import React from 'react';
import ProjectList from '../components/project-list';

const projects = [
  {
    "title":"This website",
    "url":"/this-website",
    "author":"Andrew Heekin",
    "date":"5 JUNE 2016",
    "description":"Here are the details of how I set up my personal website. I chose to host \
      the site with the static hosting feature of S3. At the risk of over-engineering, I use \
      react.js to"
  },{
    "title":"Dadjokebot",
    "url":"/dadjokebot",
    "author":"Andrew Heekin",
    "date":"7 MAY 2016",    
    "description":"This project got started while I was playing with the Twilio messaging API. \
      The concept is straightforward- text a number, and it will text you a joke. The project \
      started out as as a python"
  },{
    "title":"Pay the rent",
    "url":"/pay-the-rent",
    "author":"Andrew Heekin",
    "date":"25 JANUARY 2016",    
    "description":"I recently stumbled on the Venmo API and decided to put it to use to collect rent. \
      The application relies on the Advanced Python Scheduler package to execute cron like jobs"
  },{
    "title":"Flask metatag",
    "url":"/flask-metatag",
    "author":"Andrew Heekin",
    "date":"30 DECEMBER 2015",    
    "description":"With the rise of the open graph protocol, it's very common for blogs and sites \
      to include metatag descriptions, titles, and images to describe in a nutshell what's being shared."
  }
];

export default () => {
  return (
    <ProjectList projects={projects} />
  );
}