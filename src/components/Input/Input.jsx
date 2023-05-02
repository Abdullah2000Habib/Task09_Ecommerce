import React from 'react';
import { InputFelid, InputLabel, InputWrapper } from './style';

const Input = ({label,placeholder,value,name,id,type}) => {
    return (
        <InputWrapper>
            <InputLabel htmlFor={id} >{label}</InputLabel>
            <InputFelid type={type}  name={name} id={id} placeholder={placeholder} value={value}/>
        </InputWrapper>
    );
}

export default Input;
