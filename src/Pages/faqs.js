import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import {getFaqs} from '../Services/contactus';
import ReactHtmlParser from 'react-html-parser';

const Faqs = () => {
  const [challengeSolver, setChallengeSolver] = useState();
  const [challengeHosts, setChallengeHosts] = useState();

  const fetchFaqs = async () => {
    const response = await getFaqs();
    if (response.successData) {
      setChallengeSolver(response.successData.solver);
      setChallengeHosts(response.successData.host);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <Layout>
      <div className="mt-5 static-content">
        <h1 className="mb-2">Frequently Asked Questions (FAQs)</h1>
        <strong>
          Find below the top frequently asked questions by Challenge Solvers and
          Challenge Hosts.
        </strong>
        <h2>Challenge Solvers</h2>

        {challengeSolver?.map((solver, index) => (
          <div key={index}>
            <strong>{ReactHtmlParser(solver.question)}</strong>
            <div>{ReactHtmlParser(solver.answer)}</div>
          </div>
        ))}

        <h2>Challenge Hosts</h2>

        {challengeHosts?.map((host, index) => (
          <div key={index}>
            <strong>{ReactHtmlParser(host.question)}</strong>
            <div>{ReactHtmlParser(host.answer)}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Faqs;
