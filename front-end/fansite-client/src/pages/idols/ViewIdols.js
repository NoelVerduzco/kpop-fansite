import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { findAllIdols } from '../../services/data';

function ViewIdols() {
  const [idols, setIdols] = useState([]);
  const navigate = useNavigate();

  const handleIdolClick = (idolId) => {
    console.log('Clicked on idol with ID:', idolId);

    navigate(`/idols/${idolId}`);
  };

  useEffect(() => {
    findAllIdols()
      .then((data) => {
        if (Array.isArray(data)) {
          setIdols(data);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch((error) => console.error('Error fetching idols:', error));
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary mt-4">KPop Idols</h1>
      <div className="table-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Stage Name</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            {idols.map((idol) => (
              <tr className="table-primary" key={idol.id} onClick={() => handleIdolClick(idol.id)}>
                <td>{idol.stage_name}</td>
                <td>{idol.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewIdols;
