import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calculator() {
    // Деклариране на състояние за текущия резултат
    let [result, setResult] = useState('');

    // Функция за добавяне символ към текущия израз
    const clickHendler = (props) => {
        setResult(result.concat(props.target.id));
    };

    // Функция за изчистване на целия резултат
    const clear = () => {
        setResult("");
    };

    // Функция за изтриване на последния елемент от резултата
    const deleteEl = () => {
        setResult(result.slice(0, -1)); // премахва последния символ на низа
    };

    // Функция за изчисляване на резултата
    const calculate = () => {
        try {
            // Проверява дали резултата е прекалено голям или прекалено малък
            if (evaluate(result) > 1 * 10 ** 10 || evaluate(result) < (1 * 10) ** 10 * -1) {
                setResult(evaluate(result).toExponential(2).toString()); // Преобразува в експоненциален формат
            } else {
                setResult(evaluate(result).toString()); // Презаписва в низ и записва резултата 
            }
        } catch (rerror) {
            setResult('Error'); // Показва "Error" в случай на грешка
        }
    };

    // Основен JSX за визуализиране на калкукатора
    return (
        <>
            <div className="calc">
                <h1>CALCULATOR</h1>
                <input className="display" type="Numbers" readOnly value={result} />
                <div className="buttons">
                    <button onClick={clear} >AC</button>
                    <button onClick={deleteEl} >DE</button>
                    <button onClick={clickHendler} id="%">%</button>
                    <button onClick={clickHendler} id="/">/</button>

                    <button onClick={clickHendler} id="7">7</button>
                    <button onClick={clickHendler} id="8">8</button>
                    <button onClick={clickHendler} id="9">9</button>
                    <button onClick={clickHendler} id="*">*</button>

                    <button onClick={clickHendler} id="4">4</button>
                    <button onClick={clickHendler} id="5">5</button>
                    <button onClick={clickHendler} id="6">6</button>
                    <button onClick={clickHendler} id="-">-</button>

                    <button onClick={clickHendler} id="1">1</button>
                    <button onClick={clickHendler} id="2">2</button>
                    <button onClick={clickHendler} id="3">3</button>
                    <button onClick={clickHendler} id="+">+</button>

                    <button onClick={clickHendler} id=".">.</button>
                    <button onClick={clickHendler} id="0">0</button>
                    <button className="equal-button" onClick={calculate} id="=">=</button>
                </div>
            </div>
        </>

    )
}