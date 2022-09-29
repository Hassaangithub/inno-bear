import React from 'react';
import plusIcon from '../../images/plus-icon.png';
import pencilIcon from '../../images/Pencil-alt.png';
import minusIcon from '../../images/minus-icon.png';


const Step5 = ({setStep}) => {
  const handleSubmit = e => {
    e.preventDefault();
    setStep(6);
  };

  return (
    <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
      <p className="text-muted mb-2 steps-label">STEP 5 OF 7</p>
      <div className="d-flex flex-wrap mb-3">
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
      </div>
      <h4>Time to make the rules</h4>
      <p>
        Below you’ll find some suggested rules based on your challenge type.
        Add, remove or modify any of the rules below.
      </p>
      <form>
        <div className="form-row">
          <div className="w-100 form-group add-additional-info">
            <img src={plusIcon} alt="plus-icon" className="add-icon" />
            <p className="mb-0" />
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque eget bibendum ut dui. Risus porta dignissim
            </p>
            <img src={pencilIcon} alt="pencil-alt" className="edit-icon" />
          </div>
          <div className="w-100 form-group add-additional-info">
            <img src={plusIcon} alt="plus-icon" className="add-icon" />
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque eget bibendum ut dui. Risus porta dignissim
            </p>
            <img src={pencilIcon} alt="pencil-alt" className="edit-icon" />
          </div>
          <div className="w-100 form-group add-additional-info">
            <img
              src={minusIcon}
              alt="plus-icon"
              className="minus-icon"
            />
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque eget bibendum ut dui. Risus porta dignissim
            </p>
            <img src={pencilIcon} alt="pencil-alt" className="edit-icon" />
          </div>
          <div className="w-100 form-group add-additional-info">
            <img src={plusIcon} alt="plus-icon" className="minus-icon" />
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque eget bibendum ut dui. Risus porta dignissim
            </p>
            <img src={pencilIcon} alt="pencil-alt" className="edit-icon" />
          </div>
          <div className="w-100 form-group add-additional-info">
            <img
              src={minusIcon}
              alt="plus-icon"
              className="minus-icon"
            />
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque eget bibendum ut dui. Risus porta dignissim
            </p>
            <img src={pencilIcon} alt="pencil-alt" className="edit-icon" />
          </div>
        </div>
        <button className="theme-link">
          <span className="mr-2 fa fa-plus"></span>Add additional rules
        </button>
        <div className="mt-xl-5 mt-sm-4 mt-3">
          <button type="submit" className="px-md-5 white-btn btn">
            Save as Draft
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="px-md-5 ml-md-4 ml-3 btn create-account-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step5;
