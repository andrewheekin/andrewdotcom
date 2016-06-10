import React from 'react';

export default () => {
  return (
    <div className="project-page">
      <h1>Dadjokebot</h1>
      <p>This project got started while I was playing with the Twilio messaging
      API. The concept is straightforward - text a number, and it will text you a joke.</p>
      <p>The project started out as as a python flask application using the twilio package.
      After a while I decided to add a landing page to be included as a link in the response
      sms to collect analytics data. I had heard a lot about and wanted to test out a
      completely static react + redux front end that would make cross-origin calls to an external
      backend. The front end is statically hosted on an S3 bucket backed by a Cloudfront CDN.
      Admittedly, the CDN is overkill for my traffic but was still fun to set up. I use axios
      as my async http request driver.</p>
      <p>The backend server is hosted on DigitalOcean. I use docker-compose to rebuild the 
      flask app. I use a postgres docker image and a
      separate postgres data container to persist data on what numbers the app has texted a joke. I also use
      redis as a faster way to keep track of jokes told to avoid telling the same joke twice to a number.</p>
      <p>Security still needs some work (no flask api auth yet). I use SSL certs on both the
      DigitalOcean droplet and the S3 bucket. I use Letsencrypt SSL on the droplet, and the free ACM
      on Cloudfront. As a reverse proxy, I use a simple Nginx proxy to speed things up if traffic
      were to increase.</p>
      <br />
      <p>Text "dadjoke" to (404) 476-6987 to try it (it doesn't send spam)</p>
      <br />
      <p>Demo: <a href="https://dadjokebot.com">
      https://dadjokebot.com</a></p>      
      <p>Github repo (frontend): <a href="https://github.com/andrewheekin/dadjoke-frontend">
      https://github.com/andrewheekin/dadjoke-frontend</a></p>
      <p>Github repo (backend): <a href="https://github.com/andrewheekin/dadjoke">
      https://github.com/andrewheekin/dadjoke</a></p>      
    </div>
  );
}