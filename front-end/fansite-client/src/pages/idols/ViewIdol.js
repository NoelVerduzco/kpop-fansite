import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findIdolById, findGroupById } from '../../services/data';

function ViewIdol() {
    const { id = 'defaultId' } = useParams();
    console.log('id:', id);
    const [idol, setIdol] = useState(null);
    const [group, setGroup] = useState(null);

    useEffect(() => {
        let idolData = [];
        let groupData = {};

        (async () => {
            idolData = await findIdolById(id);
            groupData = await findGroupById(idolData[0].group_id);
        })().then(() => {
            setIdol(idolData[0]);
            setGroup(groupData);
        });
    }, [id]);

    return (
        <div>
            <h2 className="text-center mt-4">Idol Information</h2>
            {idol ? (
                <div>
                    <div
                        className="card border-dark mx-auto mb-3"
                        style={{ width: '50%' }}
                    >
                        <div
                            className="card-header text-center"
                            style={{ fontSize: '24px', textAlign: 'center' }}
                        >
                            {idol.stage_name}
                        </div>
                        <img
                            src={require('../../assets/groups/' +
                                group.groupName.toLowerCase() +
                                '/headshots/' +
                                idol.stage_name.toLowerCase() +
                                '.jpg')}
                            class="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                Position:{' '}
                                {idol.position == null
                                    ? 'Unassigned'
                                    : idol.position}
                            </h4>
                            <ul>
                                <li>Nationality: {idol.nationality}</li>
                                <li>Birthday: {idol.birthday}</li>
                                <li>Height: {idol.height_in_cm} cm</li>
                                <li>MBTI Type: {idol.mbti_type}</li>
                                <li>Zodiac Sign: {idol.zodiac_sign}</li>
                                <li>
                                    Chinese Zodiac Sign:{' '}
                                    {idol.chinese_zodiac_sign}
                                </li>
                                <li>Favorite Color: {idol.favorite_color}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading idol information...</p>
            )}
        </div>
    );
}

export default ViewIdol;
