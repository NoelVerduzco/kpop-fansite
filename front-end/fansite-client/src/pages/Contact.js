import React from 'react';

export default function Contact() {
  return (
    <div className="container text-center">
      <h1>Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <div className="card border-dark">
            <div className="card-header">Noel Verduzco</div>
            <div className="card-body">
              <h4 className="card-title">Stuff about Noel</h4>
              <p className="card-text">Some more stuff about Noel.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-dark">
            <div className="card-header">Jeanmarie Jackman</div>
            <div className="card-body">
              <h4 className="card-title">Stuff about JJ</h4>
              <p className="card-text">Some more stuff about JJ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
