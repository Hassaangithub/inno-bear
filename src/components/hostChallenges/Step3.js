import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {useRecoilState} from 'recoil';
import {challengeAtom} from '../../recoil/atom';
import {saveChallenge3} from '../../Services/challanges';

const Step3 = ({setStep, challengeId, step}) => {
  const [challenge, setChallenge] = useRecoilState(challengeAtom);
  const [prize, setPrize] = useState();
  const [awards, setAwards] = useState([
    {text: '', number: ''},
    {text: '', number: ''},
  ]);
  const [loading, setLoading] = useState(false);

  const handleAward = ({target: {id, value}}, position) => {
    let type = id === 'money' ? 'text' : 'number';
    setAwards(
      [...awards].map((object, index) => {
        if (index === position) {
          return {
            ...object,
            [type]: value,
          };
        } else return object;
      }),
    );
  };

  const addAward = e => {
    e.preventDefault();
    if (awards.length < 5) {
      setAwards([...awards, {text: '', number: ''}]);
    }
  };

  const getTotalAwards = () =>
    awards.filter(item => item.number && item.number !== '');

  const getPrice = () =>
    awards.filter(item => item.text && item.number).map(item => item.text);

  const getAwardsNumber = () =>
    awards.filter(item => item.text && item.number).map(item => item.number);

  const handleSubmit = e => {
    e.preventDefault();
    const totalAwards = getTotalAwards();
    const price = getPrice();
    const awardsNumber = getAwardsNumber();
    if (!prize) {
      toast.error('Total prize is Missing');
    }
    if (!totalAwards.length) {
      toast.error('Award info is Missing');
    }
    if (prize && totalAwards.length) {
      setChallenge({
        ...challenge,
        award_prize: prize,
        number_of_awards: awardsNumber,
        price: price,
      });
      setStep(4);
    }
  };

  const handleDraft = async e => {
    e.preventDefault();
    const totalAwards = getTotalAwards();
    const price = getPrice();
    const awardsNumber = getAwardsNumber();
    setLoading(true);
    const response = await saveChallenge3({
      user_id: localStorage.getItem('userId'),
      step: step,
      challenge_id: challengeId,
      award_prize: prize,
      number_of_awards: awardsNumber,
      price: price,
    });

    if (response.status === 200) {
      toast.success(response.message);
      setLoading(false);
    } else {
      toast.error(response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
      <p className="text-muted mb-2 steps-label">STEP 3 OF 7</p>
      <div className="d-flex flex-wrap mb-3">
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
      </div>
      <h4 className="mb-4">Time to talk about prize awards</h4>
      <form>
        <div className="form-row mb-sm-4 mb-3">
          <div className="w-100 form-group mb-0">
            <h6>What is the total prize purse amount you’d like to award?</h6>
            <input
              type="number"
              className="form-control"
              min={0}
              placeholder="What is the total prize purse amount you’d like to award?"
              onChange={e => setPrize(e.target.value)}
            />
          </div>
        </div>
        {awards.map((item, index) => (
          <div className="form-row mb-sm-4 mb-0" key={index}>
            <div className="form-group col-sm-8 mb-0">
              <h6>Award {index + 1}</h6>
              <input
                id="money"
                type="number"
                className="form-control"
                placeholder="Type in an amount"
                min={0}
                onChange={e => handleAward(e, index)}
              />
            </div>
            <div className="form-group col-sm-4 my-sm-0 my-3">
              <h6>Number of Awards</h6>
              <input
                id="awardNo"
                type="number"
                className="form-control"
                placeholder="Enter Number"
                min={0}
                onChange={e => handleAward(e, index)}
              />
            </div>
          </div>
        ))}
        <button className="theme-link" onClick={addAward}>
          <span className="mr-2 fa fa-plus"></span>Add additional awards
        </button>
        <div className="mt-xl-5 mt-sm-4 mt-3">
          <button
            type="submit"
            className="px-md-5 white-btn btn"
            onClick={handleDraft}>
            {loading ? (
              <div
                className="spinner-border text-primary spinner-border-md"
                role="status"
              />
            ) : (
              'Save as Draft'
            )}
          </button>
          <button
            type="submit"
            className="px-md-5 ml-md-4 ml-3 btn create-account-btn text-white"
            onClick={handleSubmit}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
