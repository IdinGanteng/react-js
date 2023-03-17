import React from 'react';
import notfound from './../Assets/Images/pngegg.png';

const NotFound = () => {
    
    return (
        <div>
            <img src={notfound} style={{width:'800px',height:'550px'}} alt="not found"/>
        </div>
    )
}

export default NotFound;