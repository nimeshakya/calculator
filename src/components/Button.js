import React, { useState, useEffect } from 'react';

const Button = ({ id, name, class_name, handleClick }) => {
    return (
        <button
            id={id}
            className={`bg-orange-400 ${
                id === 'clear' || id === 'zero' ? 'col-span-2' : ''
            } ${
                id === 'equals' ? 'row-span-2' : ''
            } rounded-lg text-neutral-800 text-xl ${class_name}`}
            value={name}
            onClick={handleClick}
        >
            {name}
        </button>
    );
};

export default Button;
