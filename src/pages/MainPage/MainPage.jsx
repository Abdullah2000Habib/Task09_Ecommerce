import { useTheme } from '@emotion/react';
import React from 'react';
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import FirstFloor from '../../components/FirstFloor/FirstFloor';
import TopHeader from '../../components/TopHeader/TopHeader';
import { MainPageWrapper } from './style';

const MainPage = () => {
    const theme =useTheme();
    return (
        <MainPageWrapper>
            <TopHeader/>
            <BottomHeader/>
            <FirstFloor/>
        </MainPageWrapper>
    );
}

export default MainPage;
