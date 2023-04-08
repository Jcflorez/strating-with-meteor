import React from 'react';

export const ErrorAlert = ({ message }) => {
    return(
        <div className="alert alert-danger d-flex align-items-center sm-12" role="alert">
        <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use /></svg>
        <div>
            {message}
        </div>
        </div>
    );
}                                                                                               


