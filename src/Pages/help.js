import React from 'react';
import Layout from '../components/Layout';

const Help = () => {
  return (
    <Layout>
      <div className="static-content mt-5">
        <h1 className="mb-4">Help</h1>

        <p>
          Connect with the InnoBear support team by sending an email to
          InnoBear@floor23digital.com. In your subject include one of the help
          topics below if relevant, and provide us with a description of what
          you’re trying to achieve. Email response times are 24-48 hours from
          the time it lands in our inbox. If the help needed is specific to an
          active challenge, use the challenge dashboard to submit the relevant
          questions.
        </p>
        <strong>Help Topics</strong>
        <ul style={{listStyle: 'none', marginTop: '10px'}}>
          <li> Hosting a Challenge</li>
          <li> Creating A Solver Team</li>
          <li> Selecting a Challenge Type</li>
          <li> Determining Prize Award</li>
          <li> Accessing Challenge Data</li>
          <li>Using the Innovation Pipeline</li>
          <li> Promoting a Challenge</li>
          <li> Other</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Help;
