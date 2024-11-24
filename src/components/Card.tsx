import React from 'react';
import { SpaceXLaunch } from '../model/SpaceX';

function Card(props: SpaceXLaunch) {
    return (
        <div className='mission-card'>
            <img
                alt={props.name}
                id={props.id}
                className="mission-patch"
                src={props.links.patch.small}
            />
            <span>
                <p className="mission-name">Mission name</p>
                <p>{props.name}</p>
            </span>
        </div>
    );
}

export default Card;