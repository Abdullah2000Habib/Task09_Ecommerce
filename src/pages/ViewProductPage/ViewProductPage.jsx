import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import React from 'react';
import BottomFooter from '../../components/BottomFooter/BottomFooter';
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import Discount from '../../components/Discount/Discount';
import SavedCards from '../../components/SavedCards/SavedCards';
import TopFooter from '../../components/TopFooter/TopFooter';
import TopHeader from '../../components/TopHeader/TopHeader';
import ViewProductSectionOne from '../../components/ViewProductSectionOne/ViewProductSectionOne';
import ViewProductSectionTwo from '../../components/ViewProductSectionTwo/ViewProductSectionTwo';
import { Container } from '../../global/components';
import { StorPageRoute, StorPageRoutes, ViewProductPageWrapper } from './style';
const ViewProductPage = () => {
    return (
        <ViewProductPageWrapper>
            <TopHeader/>
            <BottomHeader/>
            <Container>
                <StorPageRoutes>
                    <StorPageRoute>Home <KeyboardArrowRightIcon/></StorPageRoute>
                    <StorPageRoute>Clothings <KeyboardArrowRightIcon/></StorPageRoute>
                    <StorPageRoute>Men’s wear <KeyboardArrowRightIcon/></StorPageRoute>
                    <StorPageRoute>Summer clothing</StorPageRoute>
                </StorPageRoutes>
                
                <ViewProductSectionOne/>
                <ViewProductSectionTwo/>
                <SavedCards related={true}/>
                <Discount/>
            </Container>
            <TopFooter/>
            <BottomFooter/>
        </ViewProductPageWrapper>
    );
}

export default ViewProductPage;
