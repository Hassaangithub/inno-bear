import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const InputModal = ({show, handleClose, setNewKeyword, addKeyword}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>Add Keyword</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="w-100 mb-3 form-control"
          type="text"
          onChange={e => setNewKeyword(e.target.value)}
        />
        <div className="d-flex justify-content-end">
          <Button
            className="mr-2 rounded"
            variant="secondary"
            onClick={handleClose}>
            Cancel
          </Button>
          <Button className="rounded" variant="primary" onClick={addKeyword}>
            Add keyword
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InputModal;
