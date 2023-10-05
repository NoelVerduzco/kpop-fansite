import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findGroupById, findIdolsByGroupId } from '../../services/data';
import dateFormatter from '../../components/DateFormatter';

function ViewGroup() {
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    findGroupById(groupId)
      .then((data) => setGroup(data[0]))
      .catch((error) => console.error('Error fetching group:', error));

    findIdolsByGroupId(groupId)
      .then((data) => setIdols(data))
      .catch((error) => console.error('Error fetching idols:', error));
  }, [groupId]);

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      {group && (
        <div className="card border-dark mb-3" style={{ width: '50%' }}>
          <div className="card-header text-center" style={{ fontSize: '24px', textAlign: 'center' }}>{group.group_name}</div>
          <div className="card-body">
          <h4 className="card-title text-center">Date Formed: {dateFormatter(group.date_formed)}</h4>
            <h5 className="card-subtitle mb-2 text-muted text-center">Idols:</h5>
            <ul>
              {idols.map((idol) => (
                <li key={idol.id}>
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