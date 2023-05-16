import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import { InputFelid, InputWrapper } from './style';
const Input = ({placeholder,value,name,id,type}) => {
    const [visibility,setVisibility]=useState(true);
    const visibilityHandler = ()=>{
        setVisibility((prev)=>!prev)
    }
    return (
        <InputWrapper  >
            <InputFelid  type={type!=='password'? type: visibility?type:'text'}  name={name} id={id} placeholder={placeholder} value={value} />
            {type === 'password'? visibility?<VisibilityIcon className="passwordIcon" onClick={visibilityHandler}/>:<VisibilityOffIcon className="passwordIcon" onClick={visibilityHandler}/>:''}
        </InputWrapper>
    );
}

export default Input;
