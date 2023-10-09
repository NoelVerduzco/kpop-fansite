import React from 'react';
import { useNavigate } from 'react-router-dom';
import kpopGroupsCollage from '../assets/kpop-groups-collage.jpeg';

function Home() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('youtube/player');
    }

    return (
        <div className="container text-center mt-5">
            <div className="text-content">
                <h1 className="display-4">K-Pop Fansite</h1>
                <p className="lead">Your source for all things K-Pop!</p>
                <p className="lead">Click the image below to play a video!</p>
            </div>
            <div className="image-container">
                <img
                    onClick={handleClick}
                    src={kpopGroupsCollage}
                    alt="Kpop Groups Collage"
                    className="responsive-image"
                />
            </div>
        </div>
    );
}

export default Home;
