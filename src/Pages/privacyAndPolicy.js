import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import {getPrivacyPolicy} from '../Services/contactus';
import ReactHtmlParser from 'react-html-parser';

const PrivacyAndPolicy = () => {
  const [data, setData] = useState();
  const fetchPrivacy = async () => {
    const response = await getPrivacyPolicy();
    if (response.successData) {
      setData(response.successData.data);
    }
  };

  useEffect(() => {
    fetchPrivacy();
  }, []);

  return (
    <Layout>
      <div className="static-content mt-5">
        {ReactHtmlParser(data?.description)}
      </div>
    </Layout>
  );
};

export default PrivacyAndPolicy;
