import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserUpdate = () => {
    const id = useParams()
    
    return (
        <div>
            <p>this is the update</p>
        </div>
    );
};

export default UserUpdate;