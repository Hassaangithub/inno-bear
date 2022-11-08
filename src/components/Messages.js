import React from 'react';
import Ellipse3 from '../images/Ellipse-3.png';

const MessageBody = () => {
  return (
    <div style={{paddingBottom: '22rem'}}>
      <div className="col-lg-10 mx-auto mt-5">
        <div className="card p-3">
          <h5>How does the award process work?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            beatae, itaque eum ad alias dolorem, quia dolore qui assumenda
            voluptatum magnam natus harum a numquam iure quam recusandae
            pariatur error?
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus iure
            perspiciatis dolores facere tempore id corporis totam laborum
            voluptate, reiciendis nam molestias neque! Ipsam quibusdam labore
            provident, molestias odit consectetur!
          </p>
        </div>
      </div>
      <div className="col-lg-10 mx-auto mt-5">
        <div className="card p-3">
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            beatae, itaque eum ad alias dolorem, quia dolore qui assumenda
            voluptatum magnam natus harum a numquam iure quam recusandae
            pariatur error?
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
