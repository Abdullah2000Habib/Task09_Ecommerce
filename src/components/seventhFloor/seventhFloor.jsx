import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SearchIcon from '@mui/icons-material/Search';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import React from 'react';
import fly from "../../assets/images/fly.png";
import { default as industry, default as product2 } from "../../assets/images/industry.png";
import product from "../../assets/images/product.png";
import { Container } from '../../global/components';
import ServicesCard from '../ServicesCard/ServicesCard';
import { SeventhFloorCards, SeventhFloorTitle, SeventhFloorWrapper } from './Style';

const SeventhFloor = () => {
    return (   

        <Container>
            <SeventhFloorWrapper>
                <SeventhFloorTitle>Our extra services</SeventhFloorTitle>
                <SeventhFloorCards>
                    <ServicesCard img={industry} title="Source from Industry Hubs" icon={<SearchIcon/>}/>
                    <ServicesCard img={product} title="Customize Your Products" icon={<Inventory2OutlinedIcon/>}/>
                    <ServicesCard img={fly} title="Fast, reliable shipping by ocean or air" icon={<SendOutlinedIcon/>}/>
                    <ServicesCard img={product2} title="Product monitoring and inspection" icon={<SecurityOutlinedIcon/>}/>
                </SeventhFloorCards>
            </SeventhFloorWrapper>
        </Container>
    );
}

export default SeventhFloor;
