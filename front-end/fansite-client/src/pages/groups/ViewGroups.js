import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findAllGroups } from '../../services/data';

function ViewGroups() {
    const [groups, setGroups] = useState([]);
    const navigate = useNavigate();

    const handleGroupClick = (groupId) => {
        navigate(`/groups/${groupId}`);
    };

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
        <div
        className="container text-center mt-5"
        style={{ minHeight: '80vh' }}
    >
            <h1 className="text-center mt-4">K-Pop Groups</h1>
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
                            <tr
                                className="table-primary"
                                key={group.id}
                                onClick={() => handleGroupClick(group.id)}
                            >
                                <td>{group.groupName}</td>
                                <td>{group.dateFormed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewGroups;
