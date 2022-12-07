import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CustomModal({
  show,
  handleClose,
  handleSubmit,
  children,
}) {
  return (
    <>
      <Modal show={show} centered>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
