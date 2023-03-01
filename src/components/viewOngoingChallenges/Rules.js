import React, {useEffect, useState} from 'react';
import {RiDeleteBinLine} from 'react-icons/ri';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {updateChallenge} from '../../Services/challanges';

function Rules({rules = [], afterUpdate = () => {}, challengeData = {}}) {
  const {id} = useParams();
  const challengeId = id.replace(':', '');
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editedRules, setEditedRules] = useState(rules);

  useEffect(() => {
    setEditedRules(rules);
  }, [rules]);

  const handleInputText = (e, id) => {
    setEditedRules(
      [...editedRules].map((object, index) => {
        if (object.id === id) {
          return {
            ...object,
            rule: e.target.value,
          };
        } else return object;
      }),
    );
  };

  const handleAddRule = e => {
    e.preventDefault();
    setEditedRules([
      ...editedRules,
      {
        rule: '',
        id: rules.length + 1,
      },
    ]);
  };

  const onFilter = id => {
    setEditedRules([...editedRules].filter(rule => rule.id !== id));
  };

  const onEdit = async e => {
    e.preventDefault();
    setIsEdit(!isEdit);
    const getFilteredRules = editedRules
      .map(rule => rule.rule)
      .filter(item => item !== undefined);
    if (
      e.target.innerText.trim() === 'Save' &&
      getFilteredRules.toString() !== rules.map(rule => rule.rule).toString()
    ) {
      setLoading(true);
      const body = {
        id: challengeId,
        rules: getFilteredRules,
      };
      if (getFilteredRules.length) {
        const response = await updateChallenge({
          ...challengeData,
          id: challengeId,
          rules: getFilteredRules,
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
        <h3>Rules</h3>
        <button className="btn-edit" onClick={onEdit}>
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
              {editedRules?.map((item, index) => (
                <div
                  className="w-100 form-group add-additional-info"
                  key={index}>
                  <input
                    className="mb-0"
                    type="text"
                    value={item.rule}
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
            {rules?.map(item => (
              <li key={item.id}>{item.rule}</li>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Rules;
