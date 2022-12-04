import moment from 'moment';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {toast} from 'react-toastify';
import ellipse3 from '../../../images/Ellipse-3.png';
import {postComment} from '../../../Services/challanges';

const Community = ({communityPost, message, setMessage}) => {
  const [loading, setLoading] = useState(false);
  const [toggleComment, setToggleComment] = useState('');
  const [answersToggle, setAnswersToggle] = useState('');
  const [filteredData, setFilteredData] = useState();

  const handleComment = async (e, id) => {
    setLoading(true);
    const response = await postComment({
      challenge_topics_id: Number(id),
      message: message,
    });
    if (response.data) {
      setLoading(false);
      toast.error(response.data.message);
    } else {
      setMessage('');
      setLoading(false);
      toast.success(response.message);
    }
  };
  const handleSearch = e => {
    const filteredPosts = communityPost?.filter(post => {
      return post.title.includes(e.target.value);
    });
    setFilteredData(filteredPosts);
  };

  const getRelatveDays = currentDate => {
    const date = currentDate.replaceAll('-', '');

    const realtivedate = moment(date, 'YYYYMMDD').fromNow();
    if (realtivedate === 'a day ago') {
      return '1 day ago';
    }
    return realtivedate;
  };

  const handleReply = id => {
    if (localStorage.getItem('token')) {
      setToggleComment(id);
    } else {
      toast.error('Please login to comment');
    }
  };

  const handleAnswer = id => {
    setAnswersToggle(id);
  };

  useEffect(() => {
    setFilteredData(communityPost);
  }, []);

  const handleAddTopic = () => {
    const data = {
      challenge_host_id: '',
      challenge_id: '',
      title: '',
      message: '',
    };
  };

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
            onChange={handleSearch}
          />
          <button className=" btn-edit" onClick={handleAddTopic}>
            Add a new topic <i className="fas fa-plus"></i>
          </button>
        </div>
        {filteredData?.map((item, index) => (
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
                  <h6 className="mb-0">{item.admin.fname}</h6>
                  <p className="mb-0 text-muted">
                    {getRelatveDays(item.created_at.split('T')[0])}
                  </p>
                </div>
              </div>
            </div>
            {answersToggle === item.id &&
              item.answers?.map(comment => (
                <div className="ml-5 mt-4" key={comment.id}>
                  <div className="media">
                    <img
                      className="align-self-start community-media-img rounded-circle"
                      src={comment.users.image}
                      alt="community-media-img"
                    />
                    <div className="media-body mx-3">
                      <h6 className="mb-0">{comment.users.fname}</h6>
                      <p>{comment.message}</p>
                      <p className="mb-0 text-muted">
                        {getRelatveDays(comment.created_at.split('T')[0])}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            <div className="d-flex justify-content-between mt-3 col-lg-3">
              <span
                className="text-muted"
                role="button"
                onClick={() => handleAnswer(item.id)}>
                <i className="fas fa-inbox"></i> {item.answers?.length}&nbsp;
                Answer
              </span>
              <span
                role="button"
                className="text-muted"
                onClick={() => handleReply(item.id)}>
                <i className="fas fa-arrow-left"></i> Reply
              </span>
            </div>

            {toggleComment === item.id && (
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
                    onClick={e => handleComment(e, item?.id)}>
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
