import React, { InputHTMLAttributes } from 'react';
import './styles.css'

interface InputStartProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const InputStartPages: React.FC<InputStartProps> = ({label, name, ...rest }) => {
    return (
        <div className="form-wrapper" >
            <input id={name} placeholder=" " {...rest} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default InputStartPages;