import React from 'react';

const Display = ({ current, formula }) => {
    return (
        <div
            id='display'
            className='w-full max-w-full p-2 bg-stone-700 rounded-lg h-auto flex flex-col items-end justify-start'
        >
            <div id='formula-container' className='w-full min-w-full'>
                <p
                    id='formula'
                    className='text-sm text-yellow-300 w-full break-words text-right bg-transparent border-0 block '
                >
                    {formula}
                </p>
            </div>
            <div id='current-container' className='text-4xl text-cyan-100 '>
                <p id='current'>{current}</p>
            </div>
        </div>
    );
};

export default Display;
