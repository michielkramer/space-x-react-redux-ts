import React, { ReactElement } from 'react';

function Loader(): ReactElement {
    return (
        <div
            aria-busy="true"
            aria-valuetext="Loading..."
            className="mission-loader-container"
            role="progressbar"
        >
            <div aria-hidden="true" className="mission-loader"></div>
        </div>
    );
}

export default Loader;
