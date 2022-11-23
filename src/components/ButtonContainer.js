import React from 'react';

import Button from './Button';
import { button_data } from '../btn-data';

const ButtonContainer = ({
    current,
    setCurrent,
    formula,
    setFormula,
    result,
    setResult,
    currAction,
    setCurrAction,
}) => {
    return (
        <>
            <div className='w-full h-5/6 pt-3 grid grid-cols-4 gap-2'>
                {button_data.map((btn) => {
                    return (
                        <Button
                            key={btn.id}
                            {...btn}
                            current={current}
                            setCurrent={setCurrent}
                            formula={formula}
                            setFormula={setFormula}
                            result={result}
                            setResult={setResult}
                            currAction={currAction}
                            setCurrAction={setCurrAction}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ButtonContainer;
