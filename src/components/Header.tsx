import React, { ReactElement } from 'react';

function Header(): ReactElement {
    return (
        <div role="heading" aria-level={1} className="app-header">
            <h1>Space X Missions</h1>
        </div>
    );
}

export default Header;