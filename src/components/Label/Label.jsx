import React from 'react';
import { InputLabel } from './style';

const Label = ({label , id}) => {
    return (
        <>
            <InputLabel htmlFor={id} >{label}</InputLabel>
        </>
    );
}

export default Label;
