
import React from 'react';
import Input from '../Input/Input';
import MainButton from '../MainButton/MainButton';
import { PhoneKey, PhoneKeys, QuoteContainer, QuoteDetails, QuoteTitle, QuoteWrapper } from './Style';

const Quote = () => {
    return (
        <QuoteWrapper>
            <QuoteTitle>Send quote to suppliers</QuoteTitle>
            <Input placeholder='What item you need?' name='item' id='item' type='text'/>
            <QuoteDetails placeholder='Type more details'></QuoteDetails>
            <QuoteContainer>
                <Input placeholder='Quantity'  name='quantity' id='quantity' type='text'/>
                <PhoneKeys>
                    <PhoneKey>Pcs</PhoneKey>
                    <PhoneKey>Pcs1</PhoneKey>
                    <PhoneKey>Pcs2</PhoneKey>
                </PhoneKeys>
            </QuoteContainer>
            <MainButton className="quoteButton" name='Send inquiry'/>
        </QuoteWrapper>
    );
}

export default Quote;
