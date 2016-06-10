import React from 'react';

export default () => {
  return (
    <div className="project-page">
      <h1>Pay the rent</h1>
      <p>I recently stumbled on the Venmo API and decided to put it to use
      to collect monthly rent from my roommates. The pay-the-rent application 
      relies on the Advanced Python Scheduler
      package to execute the payment cron jobs, the python requests package to post
      charges, and BeautifulSoup to parse the headers of the Venmo login page.</p>
      <p>To start a payment series, the user can edit the config.json file to
      include the charge amount, venmo usernames to charge, frequency, and time
      window. When running the script on an external server, security is a concern.
      Note: it is probably bad to store venmo credentials on a fresh DigitalOcean droplet
      or EC2 box.</p>
      <br />
      <p>Github repo: <a href="https://github.com/andrewheekin/pay-the-rent">
      https://github.com/andrewheekin/pay-the-rent</a></p>
    </div>
  );
}