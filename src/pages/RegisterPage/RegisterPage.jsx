import React from 'react';
import Register from '../../components/Register/Register';
import SecondaryFooter from '../../components/SecondaryFooter/SecondaryFooter';
import { Container, UitComponent } from '../../global/components';
import { RegisterPageWrapper } from './style';

const RegisterPage = () => {
    return (
        <>
            <RegisterPageWrapper>
                <Container>
                    <UitComponent>
                        <Register/>
                    </UitComponent>
                </Container>
                <SecondaryFooter/>
            </RegisterPageWrapper>
        </>
    );
}

export default RegisterPage;
