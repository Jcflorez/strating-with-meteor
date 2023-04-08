import React from 'react';

export const SuccessAlert = ({message}) => {
    return(
        <div className="alert alert-success d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use/></svg>
            <div>{message}</div>
        </div>
    );
};