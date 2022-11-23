import React, { useEffect } from 'react';

const Button = ({
    id,
    name,
    class_name,
    current,
    setCurrent,
    formula,
    setFormula,
    result,
    setResult,
    currAction,
    setCurrAction,
}) => {
    const handleClick = (e) => {
        if (e.target.id === 'clear') {
            setCurrent(0);
            setFormula('0');
            setResult(0);
        } else {
            setCurrent(e.target.value);
            switch (e.target.id) {
                case 'divide':
                    updateFormula(e.target.id, e.target.value);
                    setCurrAction('divide');
                    break;
                case 'multiply':
                    updateFormula(e.target.id, e.target.value);
                    setCurrAction('multiply');
                    break;
                case 'add':
                    updateFormula(e.target.id, e.target.value);
                    setCurrAction('add');
                    break;
                case 'subtract':
                    updateFormula(e.target.id, e.target.value);
                    setCurrAction('subtract');
                    break;
                case 'nine':
                    updateFormula(e.target.id, e.target.value);
                    doMath(9);
                    setCurrAction('nothing');
                    break;
                case 'eight':
                    updateFormula(e.target.id, e.target.value);
                    doMath(8);
                    setCurrAction('nothing');
                    break;
                case 'seven':
                    updateFormula(e.target.id, e.target.value);
                    doMath(7);
                    setCurrAction('nothing');
                    break;
                case 'six':
                    updateFormula(e.target.id, e.target.value);
                    doMath(6);
                    setCurrAction('nothing');
                    break;
                case 'five':
                    updateFormula(e.target.id, e.target.value);
                    doMath(5);
                    setCurrAction('nothing');
                    break;
                case 'four':
                    updateFormula(e.target.id, e.target.value);
                    doMath(4);
                    setCurrAction('nothing');
                    break;
                case 'three':
                    updateFormula(e.target.id, e.target.value);
                    doMath(3);
                    setCurrAction('nothing');
                    break;
                case 'two':
                    updateFormula(e.target.id, e.target.value);
                    doMath(2);
                    setCurrAction('nothing');
                    break;
                case 'one':
                    updateFormula(e.target.id, e.target.value);
                    doMath(1);
                    setCurrAction('nothing');
                    break;
                case 'zero':
                    updateFormula(e.target.id, e.target.value);
                    doMath(0);
                    setCurrAction('nothing');
                    break;
                case 'equals':
                    setFormula(`${formula}=${result}`);
                    setCurrAction('equaled');
                    setCurrent(result);
                    break;
                default:
                    break;
            }
        }
    };

    const doMath = (num) => {
        switch (currAction) {
            case 'divide':
                setResult(Number((result /= num)));
                break;
            case 'multiply':
                setResult(Number((result *= num)));
                break;
            case 'add':
                setResult(Number((result += num)));
                break;
            case 'subtract':
                setResult(Number((result -= num)));
                break;
            case 'nothing':
                setResult(Number(num));
                break;
            default:
                break;
        }
    };

    const updateFormula = (e_id, e_value) => {
        if (
            currAction === 'equaled' &&
            (e_id === 'divide' ||
                e_id === 'multiply' ||
                e_id === 'add' ||
                e_id === 'subtract')
        ) {
            setFormula(`${result}${e_value}`);
        } else if (currAction === 'equaled') {
            console.log(e_value);
            setResult(Number(e_value));
            setFormula(`${e_value}`);
        } else {
            setFormula(`${formula === '0' ? '' : formula}${e_value}`);
        }
    };

    useEffect(() => {
        console.log(`${currAction}  ${result}   ${typeof result}`);
    }, [currAction, result]);

    return (
        <button
            type='button'
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
