import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewResults({ results }) {
    const navigate = useNavigate();

    const handleResultClick = (index) => {
        const result = results[index];
        if (result.groupName) {
            // It's a group, navigate to the group view
            navigate(`/groups/${result.id}`);
        } else if (result.stage_name) {
            // It's an idol, navigate to the idol view
            navigate(`/idols/${result.id}`);
        }
    };

    const handleGroupClick = (groupId) => {
        navigate(`/groups/${groupId}`);
    };

    const handleIdolClick = (idolId) => {
        console.log('Clicked on idol with ID:', idolId);
        navigate(`/idols/${idolId}`);
    };

    return (
        <div>
            <h1 className="text-center text-primary">Results</h1>
            <div className="table-container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr
                                className="table-primary"
                                key={index}
                                onClick={() => handleResultClick(index)}
                            >
                                <td>{result.groupName || result.stage_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewResults;
