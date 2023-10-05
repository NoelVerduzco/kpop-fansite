import React, { useEffect, useState } from 'react';
import { findAllGroups } from '../../services/data';

function ViewGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    findAllGroups()
      .then((data) => {
        // Ensure 'data' is an array of groups
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
      <h2>Group List</h2>
      <table>
        <thead>
          <tr>
            <th>Group ID</th>
            <th>Group Name</th>
            <th>Date Formed</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.group_id}>
              <td>{group.group_name}</td>
              <td>{group.date_formed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewGroups;
