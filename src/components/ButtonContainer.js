import React from 'react';

import Button from './Button';
import { button_data } from '../btn-data';

const ops = ['+', '-', '*', '/'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ButtonContainer = ({
    lastPressed,
    setLastPressed,
    formula,
    setFormula,
    calc,
    setCalc,
    op,
    setOp,
}) => {
    const handleClick = (e) => {
        const { innerText } = e.target;
        console.log(innerText);

        switch (innerText) {
            case 'AC':
                setFormula('0');
                setCalc('0');
                setOp(undefined);
                break;
            case '=':
                const evaluated = eval(calc);
                console.log(evaluated);
                setCalc(evaluated);
                break;
            case '.':
                const splitted = calc.split(/[+ - * /]/);
                const last = splitted.slice(-1)[0];
                if (!last.includes('.')) {
                    setCalc(calc + innerText);
                }
                break;
            default:
                let e = undefined;
                if (ops.includes(innerText)) {
                    if (ops.includes(lastPressed) && innerText !== '-') {
                        const lastNumIndex = calc
                            .split('')
                            .reverse()
                            .findIndex(
                                (char) => char !== ' ' && nums.includes(+char)
                            );
                        e =
                            calc.slice(0, calc.length - lastNumIndex) +
                            ` ${innerText} `;
                    } else {
                        e = `${calc} ${innerText} `;
                    }
                } else {
                    e = calc === '0' ? innerText : calc + innerText;
                }
                setCalc(e);
                setLastPressed(innerText);
                break;
        }
        /*
        const { innerText } = e.target;

        setLastPressed(innerText);
        if (!Number.isNaN(Number(innerText))) {
            setFormula(formula === '0' ? innerText : formula + innerText);
            if (currNumber === '0') {
                setCurrNumber(innerText);
            } else if (op.includes(lastPressed)) {
                setCurrNumber(innerText);
            } else {
                setCurrNumber(currNumber + innerText);
            }
            return;
        }
        setFormula(formula + innerText);
        switch (innerText) {
            case 'AC':
                setCurrNumber('0');
                setFormula('0');
                setCalc(undefined);
                setOp(undefined);
                break;
            case '.':
                if (!currNumber.includes('.')) {
                    setCurrNumber(currNumber + innerText);
                    setFormula(formula + innerText);
                }
                break;
            default:
                if (!op) {
                    setOp(innerText);
                    setCalc(currNumber);
                    setCurrNumber('');
                } else if (innerText === '=') {
                    const evaluated = eval(
                        `${calc} ${op === 'x' ? '*' : op} ${currNumber}`
                    );
                    setOp(undefined);
                    setCalc(evaluated);
                    setCurrNumber(evaluated);
                    setFormula(`${formula}=${evaluated}`);
                } else {
                    setOp(innerText);
                }
                console.log(`${calc} ${op} ${currNumber}`);
        }
        setLastPressed(innerText);
        */
    };

    return (
        <>
            <div className='w-full h-5/6 pt-3 grid grid-cols-4 gap-2'>
                {button_data.map((btn) => {
                    return (
                        <Button
                            key={btn.id}
                            {...btn}
                            handleClick={handleClick}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ButtonContainer;
