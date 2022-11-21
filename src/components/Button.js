import React from 'react';

const Button = ({ id, name, class_name }) => {
    return (
        <button
            type=''
            className={`bg-orange-400 ${
                id === 'clear' || id === 'zero' ? 'col-span-2' : ''
            } ${id === 'equals' ? 'row-span-2' : ''} rounded-lg`}
            value={name}
        >
            {name}
        </button>
    );
};

export default Button;
