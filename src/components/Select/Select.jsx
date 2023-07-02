import React from 'react';
import { SelectInput, SelectTitle, SelectWrapper } from './Style';

const Select = ({type,title,id,name}) => {
    return (
        <SelectWrapper>
            {type?<SelectInput id={id} name={name}  type={type}/>:''}
            <SelectTitle htmlFor={id}>
                {title}
            </SelectTitle>
        </SelectWrapper>
    );
}

export default Select;
