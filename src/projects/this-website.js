import React from 'react';

export default () => {
  return (
    <div className="project-page">
      <h1>This website</h1>
      <p>Here are the details of how I set up my personal website. I chose to host 
      the site with the static hosting feature of S3. At the risk of over-engineering,
      I use react.js to generate my view and webpack to bundle my javascript
       ( <code>{"webpack -p"}</code> ). React-router provides simple routing functionality.
       With the bundled javascript from webpack, updating the site is as simple as uploading
       the new index.html, style, bundle.js, and img folder to the bucket. In the future, I'd like
       to play around with the Animation add-on to get on-load text animations.</p>
      <br />
      <p>Github repo: <a href="https://github.com/andrewheekin/andrewdotcom">
      https://github.com/andrewheekin/andrewdotcom</a></p>
    </div>
  );
}