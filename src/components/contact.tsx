import React from 'react';
import styled from 'styled-components';
import Header from './header';

const ContactContainer = styled.div`
    `

const Contact = () => (
    <>
        <Header/>
        <ContactContainer>
            <div>Mail</div>
            <div>Github</div>
            <div>social icons</div>
        </ContactContainer>
    </>
)

export default Contact;