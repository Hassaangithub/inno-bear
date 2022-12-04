import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Layout from '../components/Layout';
import {AllPlans} from '../Services/pricing';

const Pricing = () => {
  const [plans, setPlans] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getPlans = async () => {
      const response = await AllPlans();
      if (response.data.successData.data) {
        setPlans(response.data.successData.data);
      }
    };
    getPlans();
  }, []);

  const handleClick = (e, planType) => {
    if (localStorage.getItem('token')) {
      navigate('/host-Challenge/funding-source');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <Layout>
      <div className="page-main-content mt-3 px-md-5 px-3">
        <h3 className="text-center">
          Let’s pick the perfect plan and get those ideas flowing your way
        </h3>
        <div className="col-sm-10 mx-auto">
          <p className="text-center mb-0">
            Pricing is based on the desired challenge purse size. The more you
            provide in awards to all the brilliant minds solving your challenge,
            the lower the fee, but with a package of custom sucess support
            regardless of your award amount.
          </p>
          <p className="text-center">
            Get going...risk free: Get started on your challenge design now for
            free and get billed only after you've made your challenge live
          </p>
          <p className="text-center">
            Interested in hosting multiple challenges?
            <span className="orange contact-us-txt">Contact Us</span> for
            Special Pricing
          </p>
        </div>
        <div className="choose-plan-block my-lg-5 mt-4 mb-5">
          {plans?.map(item => (
            <div
              className="px-lg-4 py-lg-5 p-sm-4 p-3 choose-plan-inside"
              key={item.id}>
              <h2 className="text-center heading">{item.plan_title}</h2>
              <h1 className="mb-1 text-center">
                {item.plan_discount} <span className="h4 percent-sign">%</span>
              </h1>
              <p className="mb-2 text-muted text-center">of prize purse</p>
              <h6 className="text-center mb-0 orange">
                Under ${item.plan_price}
              </h6>
              <a
                className="px-md-5 white-btn btn w-100 my-4 py-3"
                onClick={e => handleClick(e, item.plan_title)}>
                Begin {item.plan_title}
              </a>
              <ul className="list-style-none">
                {item?.plan_points?.map(point => (
                  <li className="d-flex align-items-center mb-3" key={point.id}>
                    <span className="fa fa-check check-mark mr-4"></span>
                    {point.points}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
