import React, {useState} from 'react';
import Heading from '../components/hostChallenges/Heading';
import Step1 from '../components/hostChallenges/Step1';
import Step2 from '../components/hostChallenges/Step2';
import Step3 from '../components/hostChallenges/Step3';
import Step4 from '../components/hostChallenges/Step4';
import Step5 from '../components/hostChallenges/Step5';
import Step6 from '../components/hostChallenges/Step6';
import Step7 from '../components/hostChallenges/Step7';
import Layout from '../components/Layout';

const HostChallenge = () => {
  const [step, setStep] = useState(7);
  const [challengeId, setChallengeId] = useState();

  const updateId = id => {
    setChallengeId(id);
  };

  return (
    <Layout>
      <div className="page-main-content mt-3 px-md-5 px-3">
        <Heading />
        {step === 1 && (
          <Step1
            setStep={setStep}
            step={step}
            challengeId={challengeId}
            updateId={updateId}
          />
        )}
        {step === 2 && (
          <Step2
            setStep={setStep}
            step={step}
            challengeId={challengeId}
            updateId={updateId}
          />
        )}
        {step === 3 && (
          <Step3
            setStep={setStep}
            step={step}
            challengeId={challengeId}
            updateId={updateId}
          />
        )}
        {step === 4 && (
          <Step4
            setStep={setStep}
            step={step}
            challengeId={challengeId}
            updateId={updateId}
          />
        )}
        {step === 5 && (
          <Step5
            setStep={setStep}
            step={step}
            challengeId={challengeId}
            updateId={updateId}
          />
        )}
        {step === 6 && (
          <Step6
            setStep={setStep}
            step={step}
            challengeId={challengeId}
            updateId={updateId}
          />
        )}
        {step === 7 && (
          <Step7
            setStep={setStep}
            step={step}
            challengeId={challengeId}
            updateId={updateId}
          />
        )}
      </div>
    </Layout>
  );
};

export default HostChallenge;
