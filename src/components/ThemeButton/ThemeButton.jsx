import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React, { useState } from 'react';
import { ThemeButtonWrapper } from './style';
const ThemeButton = () => {
    const [theme,setTheme] =useState(true);
    const ToggleHandler =()=>{
        setTheme((prev)=>!prev)
    }
    return (
        <ThemeButtonWrapper>
            {theme?<DarkModeIcon onClick={ToggleHandler}/>:<LightModeIcon onClick={ToggleHandler}/>}
        </ThemeButtonWrapper>
    );
}

export default ThemeButton;
