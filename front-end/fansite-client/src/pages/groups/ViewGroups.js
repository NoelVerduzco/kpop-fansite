import React, { useEffect, useState } from 'react';
import { findAllGroups } from '../../services/data';

function ViewGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    findAllGroups()
      .then((data) => {
        if (Array.isArray(data)) {
          setGroups(data);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch((error) => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary">KPop Groups</h1>
      <div className="table-container"> 
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Group Name</th>
              <th scope="col">Date Formed</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr class="table-primary" key={group.group_id}>
                <td>{group.group_name}</td>
                <td>{group.date_formed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewGroups;
