import React from 'react';
import styled from 'styled-components';
import Header from './header';

const AboutContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
`



const Aboutme = () => (
    <>
        <Header/>
        <AboutContainer>
            <div>About Me
                <p>Elso paragraph</p>
                <p>Masodik paragraph</p>
            </div>
        </AboutContainer>
    </>
);

export default Aboutme;