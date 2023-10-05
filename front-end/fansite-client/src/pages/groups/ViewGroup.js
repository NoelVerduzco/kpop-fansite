import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findGroupById, findIdolsByGroupId } from '../../services/data';

function ViewGroup() {
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    findGroupById(groupId)
      .then((data) => setGroup(data))
      .catch((error) => console.error('Error fetching group:', error));

    findIdolsByGroupId(groupId)
      .then((data) => setIdols(data))
      .catch((error) => console.error('Error fetching idols:', error));
  }, [groupId]);

  return (
    <div className="container">
      {group && (
        <div className="card border-dark mb-3">
          <div className="card-header">{group.group_name}</div>
          <div className="card-body">
            <h4 className="card-title">Year Formed: {group.date_formed}</h4>
            <h5 className="card-subtitle mb-2 text-muted">Idols:</h5>
            <ul>
              {idols.map((idol) => (
                <li key={idol.idol_id}>
                  {idol.stage_name} - {idol.position}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewGroup;
