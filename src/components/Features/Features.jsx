import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import MessageIcon from '@mui/icons-material/Message';
import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import { FeaturesWrapper } from './style';
const Features = () => {
    return (
        <FeaturesWrapper>
            <FeatureCard title='Secure payment' description='Have you ever finally just' icon={<LockIcon/>}/>
            <FeatureCard title='Customer support' description='Have you ever finally just' icon={<MessageIcon/>}/>
            <FeatureCard title='Free delivery' description='Have you ever finally just' icon={<LocalShippingIcon/>}/>
        </FeaturesWrapper>
    );
}

export default Features;
