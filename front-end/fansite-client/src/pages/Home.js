import React from 'react';
import kpopGroupsCollage from '../assets/kpop-groups-collage.jpeg'; 

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Welcome to Kpop Fansite</h1>
      <p className="lead">Your source for all things Kpop!</p>
      <img src={kpopGroupsCollage} alt="Kpop Groups Collage" />

    </div>
  );
}

export default Home;
