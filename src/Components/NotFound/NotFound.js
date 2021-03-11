import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h5>404</h5>
            <p className="opps">OPPS! page not found</p>
            <p className="opps" >Input the correct Url</p>
        </div>
    );
};

export default NotFound;