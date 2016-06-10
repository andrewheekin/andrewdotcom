import React from 'react';

export default () => {
  return (
    <div className="project-page">
      <h1>Flask metatag</h1>
      <p>With the rise of the open graph protocol, it's very common for blogs
      and sites to include metatag descriptions, titles, and images to describe
      in a nutshell what's being shared.</p>
      <p>This app is a python flask JSON api that uses the python newspaper package to output
      the open graph information (title, description, images) of a website.</p>
      <br />
      <p>Github repo: <a href="https://github.com/andrewheekin/flask-metatag">
      https://github.com/andrewheekin/flask-metatag</a></p>
    </div>
  );
}