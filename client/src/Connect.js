import React, { useState } from 'react';

function Connect({ connect }) {

    const onConnect = (e) => {
        e.preventDefault();
    }

    return (
        // Connect button
        <button
            type="button"
            className="btn btn-primary"

        >Connect</button>
    );

}

export default Connect;