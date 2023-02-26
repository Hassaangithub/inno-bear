import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {updateChallenge} from '../../Services/challanges';

function Overview({
  challenge_type,
  keywords,
  descriptionAboutChallenge,
  afterUpdate,
}) {
  const {id} = useParams();
  const challengeId = id.replace(':', '');
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(descriptionAboutChallenge);
  function NewlineText(string) {
    const text = string;
    return text?.split('\n').map((str, index) => (
      <div key={index} style={{minHeight: '25px'}}>
        {str}
      </div>
    ));
  }

  const onEdit = async e => {
    e.preventDefault();
    setIsEdit(!isEdit);

    if (
      e.target.innerText.trim() === 'Save' &&
      descriptionAboutChallenge !== description
    ) {
      setLoading(true);
      const response = await updateChallenge({
        id: challengeId,
        description_about_challenge: description,
      });
      if (response.status === 200) {
        afterUpdate();
        toast.success(response.message);
        setLoading(false);
      } else {
        toast.error(response.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="row my-sm-5 my-3">
      <div className="col-lg-12">
        <p className="text-muted mb-2">Challenge Type</p>
        <h5 className="mb-0"> {challenge_type}</h5>
        <div className="mt-3 mb-lg-5 mb-3 d-block interests-block">
          {keywords?.split(',').map((keyword, index) => (
            <span className="interest mr-2" key={index}>
              {keyword}
            </span>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-between my-4">
          <h3>Overview</h3>
          <button className="btn-edit" onClick={onEdit}>
            {loading ? (
              <div
                className="spinner-border text-primary spinner-border-md"
                role="status"
              />
            ) : (
              <>
                {isEdit ? 'Save ' : 'Edit '}
                <i className="fas fa-pen"></i>
              </>
            )}
          </button>
        </div>
        <p>{NewlineText(descriptionAboutChallenge)}</p>
        {isEdit && (
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Provide some background here"
            className="form-control mt-3"></textarea>
        )}
      </div>
    </div>
  );
}

export default Overview;
