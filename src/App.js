import React, { useState, useEffect } from 'react';

import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';

const App = () => {
    const [lastPressed, setLastPressed] = useState(undefined);
    // store number as string
    const [currNumber, setCurrNumber] = useState('0');
    const [formula, setFormula] = useState('0');
    const [calc, setCalc] = useState('0');
    const [op, setOp] = useState(undefined);

    return (
        <div
            id='calc-container'
            className='w-96 rounded-xl p-3 flex flex-col items-center justify-between bg-neutral-800'
        >
            <Display calc={calc} formula={formula} />
            <ButtonContainer
                lastPressed={lastPressed}
                setLastPressed={setLastPressed}
                currNumber={currNumber}
                setCurrNumber={setCurrNumber}
                formula={formula}
                setFormula={setFormula}
                calc={calc}
                setCalc={setCalc}
                op={op}
                setOp={setOp}
            />
        </div>
    );
};

export default App;
