import React, {useEffect, useState} from 'react';
import {RiDeleteBinLine} from 'react-icons/ri';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {updateChallenge} from '../../Services/challanges';

function WinningCriteria({
  determines = [],
  challengeData = {},
  afterUpdate = () => {},
}) {
  const {id} = useParams();
  const challengeId = id.replace(':', '');
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editedCriteria, setEditedCriteria] = useState(determines);

  useEffect(() => {
    setEditedCriteria(determines);
  }, [determines]);

  const handleInputText = (e, id) => {
    setEditedCriteria(
      [...editedCriteria].map((object, index) => {
        if (object.id === id) {
          return {
            ...object,
            wining_rule: e.target.value,
          };
        } else return object;
      }),
    );
  };

  const handleAddRule = e => {
    e.preventDefault();
    setEditedCriteria([
      ...editedCriteria,
      {
        wining_rule: '',
        id: editedCriteria.length + 1,
      },
    ]);
  };

  const onFilter = id => {
    setEditedCriteria(
      [...editedCriteria].filter(wining_rule => wining_rule.id !== id),
    );
  };

  const onEdit = async e => {
    e.preventDefault();
    setIsEdit(!isEdit);
    const getFilteredCriteria = editedCriteria
      .map(rule => rule.wining_rule)
      .filter(item => item !== undefined);
    if (
      e.target.innerText.trim() === 'Save' &&
      getFilteredCriteria.toString() !==
        determines.map(rule => rule.wining_rule).toString()
    ) {
      setLoading(true);
      const body = {
        id: challengeId,
        rules: getFilteredCriteria,
      };
      if (getFilteredCriteria.length) {
        const response = await updateChallenge({
          ...challengeData,
          id: challengeId,
          determines: getFilteredCriteria,
        });
        if (response.status === 200) {
          afterUpdate();
          toast.success(response.message);
          setLoading(false);
        } else {
          toast.error(response.message);
          setLoading(false);
        }
      }
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Judging Criteria</h3>
        <button className=" btn-edit" onClick={onEdit}>
          {loading ? (
            <div
              className="spinner-border text-primary spinner-border-md"
              role="status"
            />
          ) : (
            <>
              {isEdit ? 'Save' : 'Edit'} <i className="fas fa-pen"></i>
            </>
          )}
        </button>
      </div>
      <div className="col-lg-12">
        {isEdit ? (
          <>
            <div className="form-row">
              {editedCriteria?.map((item, index) => (
                <div
                  className="w-100 form-group add-additional-info"
                  key={index}>
                  <input
                    className="mb-0"
                    type="text"
                    value={item.wining_rule}
                    onChange={e => handleInputText(e, item.id)}
                  />

                  <RiDeleteBinLine onClick={() => onFilter(item.id)} />
                </div>
              ))}
            </div>
            <button className="theme-link" onClick={e => handleAddRule(e)}>
              <span className="mr-2 fa fa-plus"></span>Add additional rules
            </button>
          </>
        ) : (
          <>
            {editedCriteria?.map(winningRule => (
              <li key={winningRule.id}>{winningRule.wining_rule}</li>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default WinningCriteria;
