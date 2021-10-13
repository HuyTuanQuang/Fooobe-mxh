import React from 'react';
import MenuRight from './../right/MenuRight';
import './mesSengerRight.css';

function RouteRight({tabMess}) {
    return (
        <div>
            <MenuRight index={tabMess}/>
        </div>
    );
}

export default RouteRight;