import React from 'react';
import { Link } from 'react-router-dom';
import person from "../../assets/images/avatar.png";
import { PATH } from '../../constants';
import { GreetingCardImg, GreetingCardJoinButton, GreetingCardLearnButton, GreetingCardMessage, GreetingCardPerson, GreetingCardSpan, GreetingCardWrapper } from './style';
const GreetingCard = () => {
    return (
        <GreetingCardWrapper>
            <GreetingCardPerson>
                <GreetingCardImg src={person} alt="img"/>
                <GreetingCardMessage>
                    <GreetingCardSpan>Hi, user</GreetingCardSpan>
                    <GreetingCardSpan>let’s get stated</GreetingCardSpan>
                </GreetingCardMessage>
            </GreetingCardPerson>
            <Link to={PATH.REGISTER}>
                <GreetingCardJoinButton>Join Now</GreetingCardJoinButton>
            </Link>
            <GreetingCardLearnButton>Learn More</GreetingCardLearnButton>
        </GreetingCardWrapper>
    );
}

export default GreetingCard;
