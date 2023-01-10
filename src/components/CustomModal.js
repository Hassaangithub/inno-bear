import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const CustomModal = ({
  show,
  handleClose,
  onSubmit,
  children,
  submitTxt,
  modalType,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        {children}
        {/* <div className=" text-center"></div> */}
        {modalType === 'logout' && (
          <div className="d-flex justify-content-center pb-5">
            <Button
              className="mr-2 rounded btn btn-secondary btn-sm logoutCancel"
              variant="secondary"
              onClick={handleClose}>
              Cancel
            </Button>
            <Button className="rounded" variant="primary" onClick={onSubmit}>
              {submitTxt}
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
