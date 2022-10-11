import React from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {Button, Modal} from 'react-bootstrap';

const AddUpdateModal = ({
  show,
  handleClose,
  title,
  onSubmit,
  submitText,
  handleInput,
  editedRule,
}) => {
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   const focus = inputRef.target.focus();
  // }, []);
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          autoFocus
          className="w-100 mb-3 form-control"
          type="text"
          value={editedRule?.text}
          onChange={handleInput}
        />
        <div className="d-flex justify-content-end">
          <Button
            className="mr-2 rounded"
            variant="secondary"
            onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="rounded"
            variant="primary"
            onClick={() => onSubmit(editedRule.id)}>
            {submitText}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddUpdateModal;
