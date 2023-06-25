import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from 'react';
import MainButton from '../MainButton/MainButton';
import { NinthFloorContainer, NinthFloorDetails, NinthFloorInput, NinthFloorInputWrapper, NinthFloorTitle, NinthFloorWrapper } from './Style';
const NinthFloor = () => {
    return (
        <NinthFloorWrapper>
            <NinthFloorTitle>Subscribe on our newsletter</NinthFloorTitle>
            <NinthFloorDetails>Get daily news on upcoming offers from many suppliers all over the world</NinthFloorDetails>
            <NinthFloorContainer>
                <NinthFloorInputWrapper>
                    <MailOutlineIcon className='ninthFloorIcon'/>
                    <NinthFloorInput placeholder='Name' type='text'/>
                </NinthFloorInputWrapper>
                <MainButton name="Subscribe"></MainButton>
            </NinthFloorContainer>
        </NinthFloorWrapper>
    );
}

export default NinthFloor;
