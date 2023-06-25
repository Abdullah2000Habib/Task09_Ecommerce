import React from 'react';
import { default as flag1, default as flag8 } from "../../assets/images/flag1.png";
import flag2 from "../../assets/images/flag2.png";
import flag9 from "../../assets/images/flag3.png";
import flag6 from "../../assets/images/flag4.png";
import flag7 from "../../assets/images/flag5.png";
import flag10 from "../../assets/images/flag6.png";
import flag5 from "../../assets/images/flag7.png";
import flag4 from "../../assets/images/flag8.png";
import flag3 from "../../assets/images/us-flag.png";
import { Container } from '../../global/components';
import Region from '../Region/Region';
import { EighthFloorRegions, EighthFloorTitle, EighthFloorWrapper } from './Style';
const EighthFloor = () => {
    return (
        <Container>
            <EighthFloorWrapper>
                <EighthFloorTitle>Suppliers by region</EighthFloorTitle>
                <EighthFloorRegions>
                    <Region img={flag1} name="Arabic Emirates" details="shopname.ae"/>
                    <Region img={flag2} name="Australia" details="shopname.ae"/>
                    <Region img={flag3} name="United States" details="shopname.ae"/>
                    <Region img={flag4} name="Russia" details="shopname.ru"/>
                    <Region img={flag5} name="Italy" details="shopname.it"/>
                    <Region img={flag6} name="Denmark" details="denmark.com.dk"/>
                    <Region img={flag7} name="France" details="shopname.com.fr"/>
                    <Region img={flag8} name="Arabic Emirates" details="shopname.ae"/>
                    <Region img={flag9} name="China" details="shopname.ae"/>
                    <Region img={flag10} name="Great Britain" details="shopname.co.uk"/>
                </EighthFloorRegions>
            </EighthFloorWrapper>
        </Container>
    );
}

export default EighthFloor;
