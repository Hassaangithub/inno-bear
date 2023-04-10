import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const CustomModal = ({
  show,
  handleClose,
  onSubmit,
  children,
  submitTxt = '',
  isFooter = false,
  size = '',
  footerClassName = '',
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered size={size}>
      <Modal.Body>
        {children}
        {/* <div className=" text-center"></div> */}
        {isFooter && (
          <div
            className={`d-flex justify-content-end pb-2 mr-3 ${footerClassName}`}>
            <Button
              className="mr-3 rounded btn btn-secondary btn-sm logoutCancel"
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
