import React from 'react';
import styled from 'styled-components';
import Header from './header';
import { DataContainer, GlobalBackground } from '../styles/globalstyles';

const AboutContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
`



const Aboutme = () => (
    <>
        <Header/>
        <GlobalBackground>
            <DataContainer>
                <div>About Me
                <p>Elso paragraph</p>
                <p>Masodik paragraph</p>
                </div>
            </DataContainer>
        </GlobalBackground>
    </>
);

export default Aboutme;