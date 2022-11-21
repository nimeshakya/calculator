import React from 'react';

import Button from './Button';
import { button_data } from '../btn-data';

const ButtonContainer = () => {
    return (
        <>
            <div className='w-full h-5/6 pt-3 grid grid-cols-4 gap-2'>
                {button_data.map((btn) => {
                    return <Button {...btn} />;
                })}
            </div>
        </>
    );
};

export default ButtonContainer;
