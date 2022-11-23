import React, { useState } from 'react';

import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';

const App = () => {
    const [formula, setFormula] = useState('0');
    const [current, setCurrent] = useState(0);
    const [currAction, setCurrAction] = useState('nothing');
    const [result, setResult] = useState(0);

    return (
        <div
            id='calc-container'
            className='w-96 rounded-xl p-3 flex flex-col items-center justify-between bg-neutral-800'
        >
            <Display current={current} formula={formula} />
            <ButtonContainer
                current={current}
                setCurrent={setCurrent}
                formula={formula}
                setFormula={setFormula}
                result={result}
                setResult={setResult}
                currAction={currAction}
                setCurrAction={setCurrAction}
            />
        </div>
    );
};

export default App;
