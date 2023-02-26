import moment from 'moment';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {updateChallenge} from '../../Services/challanges';

function Timeline({launch, closing, submission, deadline, afterUpdate}) {
  const {id} = useParams();
  const challengeId = id.replace(':', '');
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: challengeId,
    created_at: moment(launch).format('YYYY-MM-DD'),
    start_date: moment(submission).format('YYYY-MM-DD'),
    cutoff_date: moment(closing).format('YYYY-MM-DD'),
  });

  const updateForm = (identifier, data) => {
    setFormData({...formData, [identifier]: data});
  };

  const onEdit = async e => {
    e.preventDefault();
    setIsEdit(!isEdit);
    const prevState = {
      id: challengeId,
      created_at: moment(launch).format('YYYY-MM-DD'),
      start_date: moment(submission).format('YYYY-MM-DD'),
      cutoff_date: moment(closing).format('YYYY-MM-DD'),
    };

    if (
      e.target.innerText.trim() === 'Save' &&
      JSON.stringify(prevState) !== JSON.stringify(formData)
    ) {
      setLoading(true);
      const response = await updateChallenge(formData);
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
    <div className="row mt-5">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Timeline</h3>
        <button className=" btn-edit" onClick={onEdit}>
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
      <div className="col-lg-1 mb-2 d-flex align-items-center">
        <i className="fas fa-check check-done"> Done</i>
      </div>
      <div className="col-lg-11 ">
        <div className="card  p-3">
          <h5>Challenge Launch</h5>
          {isEdit ? (
            <input
              type="date"
              value={formData.created_at}
              min={submission}
              onChange={e => updateForm('created_at', e.target.value)}
              className="form-control"
            />
          ) : (
            <p>{launch?.split('T')[0]}</p>
          )}
        </div>
      </div>
      <div className="col-lg-12 mb-3"></div>
      <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
        <i className="fas fa-calendar text-muted text-center"> No Started</i>
      </div>
      <div className="col-lg-10">
        <div className="card p-3 ">
          <h5>Challenge Submission</h5>
          {isEdit ? (
            <input
              type="date"
              className="form-control"
              value={formData.start_date}
              onChange={e => updateForm('start_date', e.target.value)}
            />
          ) : (
            <p>{submission}</p>
          )}
        </div>
      </div>
      <div className="col-lg-12 mb-3"></div>
      <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
        <i className="fas fa-calendar text-muted text-center"> Not Started</i>
      </div>
      <div className="col-lg-10">
        <div className="card p-3 ">
          <h5>Closing Period</h5>
          {isEdit ? (
            <input
              type="date"
              max={deadline}
              min={submission}
              className="form-control"
              value={formData.cutoff_date}
              onChange={e => updateForm('cutoff_date', e.target.value)}
            />
          ) : (
            <p>{closing}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
