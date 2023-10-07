import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findAllIdols, findGroupById } from '../../services/data';
import dateFormatter from '../../components/DateFormatter';

function ViewIdols() {
    const [idols, setIdols] = useState([]);
    const [groups, setGroups] = useState({});
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

                    const groupIds = Array.from(
                        new Set(data.map((idol) => idol.group_id))
                    );

                    Promise.all(
                        groupIds.map((groupId) => findGroupById(groupId))
                    )
                        .then((groupData) => {
                            const groupMap = {};
                            groupData.forEach((group) => {
                                if (group && group.length > 0) {
                                    groupMap[group[0].id] = group[0].group_name;
                                }
                            });
                            setGroups(groupMap);
                        })
                        .catch((error) =>
                            console.error('Error fetching groups:', error)
                        );
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
                            {/* <th scope="col">Group</th> */}
                            <th scope="col">Position</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Height (cm)</th>
                            <th scope="col">MBTI Type</th>
                            <th scope="col">Zodiac Sign</th>
                            <th scope="col">Chinese Zodiac Sign</th>
                            <th scope="col">Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {idols.map((idol) => (
                            <tr
                                className="table-primary"
                                key={idol.id}
                                onClick={() => handleIdolClick(idol.id)}
                            >
                                <td>{idol.stage_name}</td>
                                {/* <td>{groups[idol.group_id]}</td> */}
                                <td>{idol.position}</td>
                                <td>{idol.nationality}</td>
                                <td>{dateFormatter(idol.birthday)}</td>
                                <td>{idol.height_in_cm}</td>
                                <td>{idol.mbti_type}</td>
                                <td>{idol.zodiac_sign}</td>
                                <td>{idol.chinese_zodiac_sign}</td>
                                <td>{idol.favorite_color}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewIdols;
