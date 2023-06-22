import React from 'react';
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import FifthFloor from '../../components/FifthFloor/FifthFloor';
import FirstFloor from '../../components/FirstFloor/FirstFloor';
import FourthFloor from '../../components/FourthFloor/FourthFloor';
import SecondFloor from '../../components/SecondFloor/SecondFloor';
import SixthFloor from '../../components/SixthFloor/SixthFloor';
import ThirdFloor from '../../components/ThirdFloor/ThirdFloor';
import TopHeader from '../../components/TopHeader/TopHeader';
import SeventhFloor from '../../components/seventhFloor/seventhFloor';
import { MainPageWrapper } from './style';
const MainPage = () => {
    return (
        <MainPageWrapper>
            <TopHeader/>
            <BottomHeader/>
            <FirstFloor/>
            <SecondFloor/>
            <ThirdFloor/>
            <FourthFloor/>
            <FifthFloor/>
            <SixthFloor/>
            <SeventhFloor/>
        </MainPageWrapper>
    );
}

export default MainPage;
