import React, {useState} from 'react';
import {addUpdates} from '../../Services/challanges';
import CustomModal from '../CustomModal';

const Updates = ({updates, challengeId, challengeData}) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [scheduleUpdate, setScheduleUpdate] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('');

  console.log('dataaaa', challengeData);

  const onClose = () => {
    setOpen(false);
    setTitle('');
    setContent('');
    setScheduleDate('');
  };

  const onEdit = e => {
    e.preventDefault();
    setOpen(true);
  };

  const onAddUpdate = async () => {
    const data = {
      title,
      content,
      id: challengeId,
      user_id: challengeData?.user_id,
    };
    scheduleUpdate && (data.scheduleDate = scheduleDate);
    const response = await addUpdates(data);
    console.log('res', response);
  };

  return (
    <div className="row mt-5 mb-3">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Updates</h3>
        <button className=" btn-edit" onClick={onEdit}>
          Add New <i className="fas fa-plus"></i>
        </button>
      </div>

      {updates?.length ? (
        <>
          {updates?.map(item => (
            <div key={item.id}>
              <div className="hr mt-3"></div>
              <div className="col-12 d-flex flex-wrap justify-content-between my-4">
                <h5>{item.title}</h5>
                <h6>{item.created_at.split('T')[0]}</h6>
              </div>
              <div className="col-lg-12">
                <p>{item.updates}</p>
              </div>

              <div className="col-lg-12">
                <span className="font-weight-bolder">Shared By</span>
                <span>
                  <img
                    src={item?.users.image}
                    className="shared-by"
                    alt="shared-by"
                  />
                </span>
                <span className="text-muted">
                  {item?.users.fname} {item?.users.lname}
                </span>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="d-flex align-items-center justify-content-center w-100 text-danger">
          No updates
        </div>
      )}
      <CustomModal
        show={open}
        size="lg"
        handleClose={onClose}
        isFooter
        submitTxt="Save"
        onSubmit={onAddUpdate}
        footerClassName='justify-content-start pt-2'>
        <div className="modal-body challenge-body">
          <form>
            <div>
              <h3>Add Update</h3>
            </div>
            <div className="mt-3">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="">Content</label>
              <textarea
                name=""
                id=""
                cols="3"
                rows="3"
                value={content}
                onChange={e => setContent(e.target.value)}
                class="form-control"></textarea>
            </div>

            <div className="mt-3">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={e => setScheduleUpdate(e.target.checked)}
                checked={scheduleUpdate}
              />
              Scheduled Update
            </div>

            {scheduleUpdate && (
              <div className="mt-3">
                <label htmlFor="">Scheduled Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={scheduleDate}
                  onChange={e => setScheduleDate(e.target.value)}
                />
              </div>
            )}
          </form>
        </div>
      </CustomModal>
    </div>
  );
};

export default Updates;
