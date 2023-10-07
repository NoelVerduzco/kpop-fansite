import React from 'react';
import nf from '../assets/nf.jpeg';

function NotFound() {
    return (
        <div className="container text-center mt-5">
            <h1 className="text-primary">404</h1>
            <div className="container w-75">
                <p className="text-left">Page not found.</p>
                <img src={nf} alt="404" className="responsive-image" />
            </div>
        </div>
    );
}

export default NotFound;
