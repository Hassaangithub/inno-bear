import React from 'react';
import Ellipse3 from '../images/Ellipse-3.png';

const MessageBody = () => {
  return (
    <div style={{paddingBottom: '22rem'}}>
      <div className="col-lg-10 mx-auto mt-5">
        <div className="card p-3">
          <h5>COMING SOON: Send messages from your dashboard!</h5>
          <p>
            Communicate directly with other users centrally from your dashboard.
            No longer worry about how you’ll be able to have a one to one touch
            to collaborate with another user.
          </p>
          <div className="media">
            <img
              className="align-self-start community-media-img"
              src={Ellipse3}
              alt="community-media-img"
            />
            <div className="media-body mx-3">
              <h6 className="mb-0">Danly</h6>
              <p className="mb-0 text-muted">3 days ago</p>
            </div>
          </div>
          <hr />
          <div className="d-flex mt-3">
            <span className="text-muted">
              <i className="fas fa-comment-dots"></i> 1 Answer
            </span>
            <span className="text-muted mx-3">
              <i className="fas fa-arrow-right"></i> Post
            </span>
          </div>
          <div className="mt-4 d-flex  align-items-center">
            <img
              className="align-self-start community-media-img"
              src={Ellipse3}
            />
            <h6 className="mx-2">Jone</h6>{' '}
            <p className="text-muted mx-2 mt-2">3 days ago</p>
          </div>
          <p>
            Looking forward to this feature. There’s good opportunities to
            seriously find a great set of teammates for the next challenge!
          </p>
        </div>
      </div>
      <div className="col-lg-10 mx-auto mt-5">
        <div className="card p-3">
          <h5>Will I be able to submit a solution early?</h5>
          <p>
            Submissions will not be accepted prior to the submission open date,
            and thankfully you have the option to drop a message to the host
            just like this. The host can then make your question and her answer
            public to ensure everyone get’s the same set of information.
          </p>
          <div className="media">
            <img
              className="align-self-start community-media-img"
              src={Ellipse3}
              alt="community-media-img"
            />
            <div className="media-body mx-3">
              <h6 className="mb-0">Danly</h6>
              <p className="mb-0 text-muted">3 days ago</p>
            </div>
          </div>
          <hr />
          <div className="mt-3">
            <span className="text-muted mx-3">
              <i className="fas fa-arrow-right"></i> Post
            </span>
          </div>
          <div className="mt-3">
            <button className="btn-answer">Answer it</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBody;
