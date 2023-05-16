import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants';
import { Checkbox } from '../../global/components';
import Input from '../Input/Input';
import Label from '../Label/Label';
import MainButton from '../MainButton/MainButton';
import Separatore from '../Separatore/Separatore';
import { CheckboxContainer, InputContainer, PhoneContainer, PhoneKey, PhoneKeys, RegisterAccount, RegisterName, RegisterSpan, RegisterTitle, RegisterWrapper } from './style';
const Register = () => {
    return (
        <>

            <RegisterWrapper>
                <RegisterTitle>Register</RegisterTitle>
                <RegisterName>
                    <InputContainer>
                        <Label id='Name' label='Name'/>
                        <Input  placeholder='Type here' id='Name' name='Name' type='text'/>
                    </InputContainer>
                    <InputContainer>
                        <Label id='Surname' label='Surname'/>
                        <Input  placeholder='Type here' id='Surname' name='Surname' type='text'/>
                    </InputContainer>
                </RegisterName>
                <InputContainer>
                    <Label id='Email' label='Your e-mail'/>
                    <Input  placeholder='example@mai.com' id='Email' name='Email' type='email'/>
                </InputContainer>
                <InputContainer>
                    <Label id='Phone' label='Phone'/>
                    <PhoneContainer>
                        <PhoneKeys>
                            <PhoneKey>UZ +998</PhoneKey>
                            <PhoneKey>UZ +997</PhoneKey>
                            <PhoneKey>UN +967</PhoneKey>
                        </PhoneKeys>
                        <Input  placeholder='00-000-00-00' id='Phone' name='Phone' type='tel'/>
                    </PhoneContainer>
                    
                </InputContainer>
                <InputContainer>
                    <Label id='Password' label='Password'/>
                    <Input  placeholder='At least 6 character' id='Password' name='Password' type='password'/>
                </InputContainer>
                <InputContainer>
                    <Label id='ConfirmPassword' label='Confirm Password:'/>
                    <Input  placeholder='Type here' id='ConfirmPassword' name='ConfirmPassword' type='password'/>
                </InputContainer>
                <MainButton name='Register Now'/>

                <CheckboxContainer>
                    <Checkbox  placeholder='Checkbox' id='Checkbox' name='Checkbox' type='checkbox'/>
                    <Label id='Checkbox' label='I agree to the Terms and Conditions'/>
                </CheckboxContainer>
                <Separatore />
                <RegisterAccount>
                    <RegisterSpan >Already have an accaunt?</RegisterSpan>
                    <Link className='link' to={PATH.LOGIN}>Login</Link>
                </RegisterAccount>
            </RegisterWrapper>
        </> 
    );
}

export default Register;
