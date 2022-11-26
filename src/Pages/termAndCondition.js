import React, {useEffect, useState} from 'react';
import {getTermAndConditions} from '../Services/contactus';
import ReactHtmlParser from 'react-html-parser';

const TermAndCondition = () => {
  const [data, setData] = useState();
  const fetchTermAndConditions = async () => {
    const response = await getTermAndConditions();
    if (response.successData) {
      setData(response.successData.data);
    }
  };

  useEffect(() => {
    fetchTermAndConditions();
  }, []);

  return <div>{ReactHtmlParser(data?.description)}</div>;
};

export default TermAndCondition;
