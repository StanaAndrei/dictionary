import React from 'react';
import './Form.css';

interface IComponentProps {
    btnAction: string
    handleData: (word: string) => void;
}

export default function Form({ btnAction, handleData }: IComponentProps): React.ReactElement {
    const textInpRef = React.createRef<HTMLInputElement>();
    const [btnDisabled, setBtnDisabled] = React.useState<boolean>(true);


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        handleData(textInpRef.current!.value.toLowerCase());
        textInpRef.current!.value = '';
        setBtnDisabled(true);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        let { value: word } = textInpRef.current!;
        if (!word.length) {
            setBtnDisabled(true);
            return;
        }
        word = word.toLocaleLowerCase();
        for (let ch of word) {
            if (!(ch.match(/[a-z]/i)) && ch !== '-') {
                setBtnDisabled(true);
                return;
            }
        }
        setBtnDisabled(false);
    }

    return (
        <div className="Form">
            <input type="text" ref={textInpRef} onChange={handleChange} />
            <button onClick={handleClick} disabled={btnDisabled}>{btnAction}</button>
        </div>
    );
}