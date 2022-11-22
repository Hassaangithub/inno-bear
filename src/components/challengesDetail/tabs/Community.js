import React, {useState} from 'react';
import {toast} from 'react-toastify';
import ellipse3 from '../../../images/Ellipse-3.png';
import {postComment} from '../../../Services/challanges';

const Community = ({communityPost}) => {
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleComment = async (e, topicId) => {
    // console.log(topicId);
    setLoading(true);
    const response = await postComment({
      challenge_topic_id: Number(topicId),
      message: message,
    });
    // console.log('help help', response);
    if (response.data) {
      setLoading(false);
      toast.error(response.data.message);
    }
  };

  // console.log(communityPost);
  return (
    <div
      className="py-md-4 py-3"
      id="timeline"
      role="tabpanel"
      aria-labelledby="timelineTab">
      <div className="mb-md-5 mb-3">
        <h3 className="mb-3">Community</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-4">
          <input
            type="
      text"
            className="form-control search-field w-50"
            placeholder="Search Community"
          />
          <button className=" btn-edit">
            Add a new topic <i className="fas fa-plus"></i>
          </button>
        </div>
        {communityPost.map(item => (
          <div key={item.id}>
            <div className="hr mt-3"></div>
            <div className="mt-3 col-lg-12">
              <h5>{item.title}</h5>
            </div>
            <div className="col-lg-12">
              <p>{item.message}</p>
            </div>
            <div className="col-lg-3">
              <div className="media">
                <img
                  className="align-self-start community-media-img"
                  src={ellipse3}
                  alt="community-media-img"
                />
                <div className="media-body mx-3">
                  <h6 className="mb-0">Danly</h6>
                  <p className="mb-0 text-muted">3 days ago</p>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <span className="text-muted">
                  <i className="fas fa-inbox"></i> {item.answers?.length}&nbsp;
                  Answer
                </span>
                <span className="text-muted">
                  <i className="fas fa-arrow-left"></i> Reply
                </span>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <h6>Post your reply</h6>
              <textarea
                name=""
                id=""
                className="form-control"
                cols="4"
                rows="4"
                value={message}
                onChange={e => setMessage(e.target.value)}></textarea>
              <div className="mt-3">
                <button
                  className=" btn-post "
                  onClick={e =>
                    handleComment(e, item?.answers.challenge_topics_id)
                  }>
                  {loading ? (
                    <div
                      className="spinner-border text-primary spinner-border-md"
                      role="status"
                    />
                  ) : (
                    'Post'
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
