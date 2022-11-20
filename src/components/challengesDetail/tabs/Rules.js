import React from 'react';

const Rules = ({rules}) => {
  return (
    <div
      className="py-md-4 py-3"
      id="rules"
      role="tabpanel"
      aria-labelledby="rulesTab">
      <div className="mb-md-5 mb-3">
        <h3 className="mb-3">Rules</h3>
        {rules?.map((item, index) => (
          <li className="rules-border" key={item.id}>
            {item.rule}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Rules;
