import React from 'react';

export default () => {
  return (
    <div className="project-page">
      <h1>This website</h1>
      <p>The site is hosted with AWS S3 static hosting. The view is generated with react.js and
      webpack bundles all javascript ( <code>{"webpack -p"}</code> ). React-router provides simple
      routing functionality for the site. With the bundled javascript from webpack, updating the 
      site is as simple as uploading the new index.html, style, bundle.js, and img folder to the
      bucket. In the future, I'd like to play around with the Animation add-on to get on-load text
      animations.</p>
      <br />
      <p>
        <a href="https://github.com/andrewheekin/andrewdotcom">
        https://github.com/andrewheekin/andrewdotcom</a>
      </p>
    </div>
  );
}