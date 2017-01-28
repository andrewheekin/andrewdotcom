import React from 'react';

export default () => {
  return (
    <div className="project-page">
      <h1>Dadjokebot</h1>
      {/*<img className="bot-img" src="../../img/dadjokebot.png"></img>*/}
      <p>This project started out as as a python flask application using the twilio package.
      I added a landing page to be included as a link in the response
      sms to collect analytics data. The landing page is a static site that makes cross-origin calls to an external
      resource. The client is statically hosted on S3 by cloudfront.
      The server is hosted on DigitalOcean. Docker-compose rebuilds the 
      flask app container. Dockerized postgres and a
      separate postgres data container persist data on who texts the app. Redis keeps track of jokes told to 
      avoid telling the same joke twice. SSL certs are set up on both the
      server ip and the S3 domain. Nginx acts as a reverse proxy.</p>
      <br />
      <p><a href="https://dadjokebot.com">https://dadjokebot.com</a></p>
      <p><a href="https://github.com/andrewheekin/dadjoke-frontend">https://github.com/andrewheekin/dadjoke-frontend</a></p>
      <p><a href="https://github.com/andrewheekin/dadjoke">https://github.com/andrewheekin/dadjoke</a></p>
    </div>
  );
}