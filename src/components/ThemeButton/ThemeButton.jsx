import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import { darkTheme, lightTheme } from '../../global/themes';
import { ThemeButtonWrapper } from './style';
const ThemeButton = () => {
    const [theme,setTheme]=useContext(ThemeContext);
    localStorage.setItem('theme',theme.theme);
    const ToggleHandler =()=>{
        setTheme((prev)=>(prev.theme ==='dark'?lightTheme:darkTheme))

    }
    return (
        <ThemeButtonWrapper onClick={ToggleHandler}>
            {theme.theme==='dark'?<LightModeIcon />:<DarkModeIcon />}
        </ThemeButtonWrapper>
    );
}

export default ThemeButton;
