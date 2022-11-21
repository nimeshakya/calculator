import React from 'react';

import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';

const App = () => {
    return (
        <div
            id='calc-container'
            className='w-96 h-2/3 rounded-xl p-3 flex flex-col items-center justify-between bg-neutral-800'
        >
            <Display />
            <ButtonContainer />
        </div>
    );
};

export default App;
