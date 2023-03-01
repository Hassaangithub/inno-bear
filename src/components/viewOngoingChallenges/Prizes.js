import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {updateChallenge} from '../../Services/challanges';

function Prizes({
  previousAwards = [],
  prize = '',
  afterUpdate = () => {},
  challengeData,
}) {
  const {id} = useParams();
  const challengeId = id.replace(':', '');
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [awards, setAwards] = useState({});
  const [editedPrize, setEditPrize] = useState(prize);

  useEffect(() => {
    const awardToMap = previousAwards?.map(award => {
      return {
        text: award.price.replace(/\,/g, ''),
        number: award.number_of_awards,
      };
    });

    setAwards(awardToMap);
  }, [previousAwards]);

  useEffect(() => {
    setEditPrize(prize);
  }, [prize]);

  const handleAward = ({target: {id, value}}, position) => {
    let type = id === 'money' ? 'text' : 'number';
    setAwards(
      [...awards].map((object, index) => {
        if (index === position) {
          return {
            ...object,
            [type]: value,
          };
        } else return object;
      }),
    );
  };

  const addAward = e => {
    e.preventDefault();
    if (awards.length < 5) {
      setAwards([...awards, {text: '', number: ''}]);
    }
  };

  const getTotalAwards = () =>
    awards.filter(item => item.number && item.number !== '');

  const getPrice = () =>
    awards.filter(item => item.text && item.number).map(item => item.text);

  const getAwardsNumber = () =>
    awards.filter(item => item.text && item.number).map(item => item.number);

  const onEdit = async e => {
    e.preventDefault();
    setIsEdit(!isEdit);

    const totalAwards = getTotalAwards();
    const price = getPrice();
    const awardsNumber = getAwardsNumber();

    const body = {
      id: challengeId,
      award_prize: editedPrize,
      number_of_awards: awardsNumber,
      price: price,
    };

    if (e.target.innerText.trim() === 'Save') {
      if (!editedPrize) {
        toast.error('Total prize is Missing');
      }
      if (!totalAwards.length) {
        toast.error('Award info is Missing');
      }
      setLoading(true);
      if (prize && totalAwards.length) {
        const response = await updateChallenge({
          ...challengeData,
          id: challengeId,
          award_prize: editedPrize,
          number_of_awards: awardsNumber,
          price: price,
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
        <h3>Prizes</h3>
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
        <p className="d-flex align-items-center">
          Total prize pool for this challenge is:
          {isEdit ? (
            <input
              className="form-control col-3 ml-2"
              type="number"
              min={0}
              value={editedPrize?.replace(/\,/g, '')}
              onChange={e => setEditPrize(e.target.value)}
            />
          ) : (
            <strong>{prize + ' USD'}</strong>
          )}
        </p>
        {previousAwards?.map((item, index) => (
          <h5 key={item.id}>
            Award {index + 1}: <strong> {item.price} </strong> | Number of
            Awards: <strong> {item.number_of_awards}</strong>
          </h5>
        ))}

        {isEdit && (
          <>
            {awards.map((item, index) => (
              <div className="form-row mb-sm-4 mb-0" key={index}>
                <div className="form-group col-sm-8 mb-0">
                  <h6>Award {index + 1}</h6>
                  <input
                    id="money"
                    type="number"
                    className="form-control"
                    placeholder="Type in an amount"
                    value={item.text}
                    min={0}
                    onChange={e => handleAward(e, index)}
                  />
                </div>
                <div className="form-group col-sm-4 my-sm-0 my-3">
                  <h6>Number of Awards</h6>
                  <input
                    id="awardNo"
                    type="number"
                    className="form-control"
                    placeholder="Enter Number"
                    min={0}
                    value={item.number}
                    onChange={e => handleAward(e, index)}
                  />
                </div>
              </div>
            ))}
            <button className="theme-link" onClick={addAward}>
              <span className="mr-2 fa fa-plus"></span>Add additional awards
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Prizes;
