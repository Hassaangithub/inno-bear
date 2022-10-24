import React, {useState, useEffect} from 'react';

const Navbar = ({tab, setActiveTab, activeTab}) => {
  const data = [
    'Overview',
    'Rules',
    'Timeline',
    'Prizes',
    'Winning Criteria',
    'Participants',
    'Resources',
    'Updates',
    'Community',
  ];

  useEffect(() => {
    if (tab === 'overview') {
      setActiveTab('Overview');
    } else {
      setActiveTab('Participants');
    }
  }, [tab]);

  return (
    <ul
      className="nav nav-tabs justify-content-xl-between justify-content-center challenge-nav-tabs"
      id="challengeTypeTab"
      role="tablist">
      {data.map((item, index) => (
        <li className="nav-item" key={index} role="button">
          <a
            className={`nav-link ${item === activeTab && 'active text-white'}`}
            id={item + 'Tab'}
            data-toggle="tab"
            role="tab"
            aria-controls={item}
            aria-selected="true"
            onClick={() => setActiveTab(item)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
