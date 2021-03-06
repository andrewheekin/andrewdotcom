import React from 'react';

export default () => {
  return (
    <div className="project-page">
      <h1>Pay the rent</h1>
      <p>The pay-the-rent application collects monthly rent through venmo's api.
      The AP Scheduler package runs the payment cron jobs, the python requests package posts
      charges. BeautifulSoup parses the headers of the Venmo login page.
      The config.json file sets the charge amount, venmo usernames to charge, frequency, and time
      window.</p>
      <br />
      <p><a href="https://github.com/andrewheekin/pay-the-rent">
      https://github.com/andrewheekin/pay-the-rent</a></p>
    </div>
  );
}