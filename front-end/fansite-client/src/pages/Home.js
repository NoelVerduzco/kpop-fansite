import React from 'react';
import kpopGroupsCollage from '../assets/kpop-groups-collage.jpeg';

function Home() {
    return (
        <div className="container text-center mt-5">
            <div className="text-content">
                <h1 className="display-4">K-Pop Fansite</h1>
                <p className="lead">Your source for all things K-Pop!</p>
            </div>
            <div className="image-container">
                <img
                    src={kpopGroupsCollage}
                    alt="Kpop Groups Collage"
                    className="responsive-image"
                />
            </div>
        </div>
    );
}

export default Home;
