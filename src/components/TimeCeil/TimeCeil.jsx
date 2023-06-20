import React from 'react';
import { TimeCeilNum, TimeCeilUnit, TimeCeilWrapper } from './Style';

const TimeCeil = ({num,unit}) => {
    return (
        <TimeCeilWrapper>
            <TimeCeilNum>{num}</TimeCeilNum>
            <TimeCeilUnit>{unit}</TimeCeilUnit>
        </TimeCeilWrapper>
    );
}

export default TimeCeil;
