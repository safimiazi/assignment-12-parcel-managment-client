import React from 'react';

const ShareTitle = ({title, des}) => {

    return (
        <div className='text-center space-y-2 text-color w-6/12 mx-auto'>
            <h3 className=' font-bold text-3xl'>{title}</h3>
            <p>{des}</p>
        </div>
    );
};

export default ShareTitle;