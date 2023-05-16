import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../../assets/images/facebook-icon.png";
import google from "../../assets/images/google-icon.png";
import { PATH } from '../../constants';
import { Checkbox } from '../../global/components';
import Input from '../Input/Input';
import Label from '../Label/Label';
import MainButton from '../MainButton/MainButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import Separatore from '../Separatore/Separatore';
import { CheckboxContainer, InputContainer, LoginAccount, LoginSpan, LoginTitle, LoginWrapper } from './style';
const Login = () => {
    return (
        <>
            <LoginWrapper>
                <LoginTitle>Sign in</LoginTitle>
                <InputContainer>
                    <Label id='Username' label='Username'/>
                    <Input  placeholder='Email or Phone' id='Username' name='Username' type='text'/>
                </InputContainer>
                <InputContainer>
                    <Label id='Password' label='Password'/>
                    <Input  placeholder='password' id='Password' name='Password' type='password'/>
                </InputContainer>
                <CheckboxContainer>
                    <Checkbox  placeholder='Checkbox' id='Checkbox' name='Checkbox' type='checkbox'/>
                    <Label id='Checkbox' label='Remember me'/>
                </CheckboxContainer>
                <MainButton name='Login'/>
                <Separatore title='OR'/>
                <SecondaryButton title='Continue with Google' img={google} brand='google'/>
                <SecondaryButton title='Continue with facebook' img={facebook} brand='facebook'/>
                <LoginAccount>
                    <LoginSpan >Don’t have an account?</LoginSpan>
                    <Link className='link' to={PATH.REGISTER}>Register Now</Link>
                </LoginAccount>
            </LoginWrapper>
        </> 
    );
}

export default Login;
