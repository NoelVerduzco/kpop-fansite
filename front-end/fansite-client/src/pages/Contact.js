import React from 'react';

export default function Contact() {
    return (
        <div className="container text-center">
            <h1>Contact Us</h1>
            <div className="row justify-content-center">
                <div className="col-md-4 mb-3">
                    {/* TODO: find out where the card flip styling needs to go */}
                    <div className="card border-dark card-flip">
                        <div className="card-header bg-primary text-white">
                            Noel Verduzco
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Noel Verduzco</h4>
                            <p className="card-text">Stuff about Noel.</p>
                            <div className="card-back">
                                {/* <h4 className="card-title">Back of the Card</h4>
                <p className="card-text">This is the back face of the card.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card border-dark card-flip">
                        <div className="card-header bg-primary text-white">
                            Jean Jackman
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Jean Jackman</h4>
                            <p className="card-text">Stuff about Jean.</p>
                            <div className="card-back">
                                {/* <h4 className="card-title">Back of the Card</h4>
                <p className="card-text">This is the back face of the card.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
