import React from 'react';

const Display = () => {
    return (
        <div
            id='display'
            className='w-full p-2 bg-stone-700 rounded-lg h-1/6 flex flex-col items-end justify-start'
        >
            <div id='formula-container'>
                <p id='formula' className='text-sm text-yellow-300'>
                    2+2=4
                </p>
            </div>
            <div id='current-container' className='text-4xl text-cyan-100'>
                <p id='current'>4</p>
            </div>
        </div>
    );
};

export default Display;
