import React from 'react';
import styled from 'styled-components';
import Header from './header';
import me2 from '../assets/me2.png'
import { Link } from 'react-router-dom';

const IntroContainer = styled.div`
    width: 100vw;
    height: 93vh;
    background-color: #F5DF4E;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-shadow: inset rgba(0, 0, 0, 0.15) 0px 5px 15px;

    img {
        width: 25em;
        height: 25em;
    }

    h2 {
        font-weight: 100;
        font-size: 2em;
    }

    h1 {
        font-weight: 600;
        font-size: 3.3em;
    }

`
const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
        font-weight: 100;
        color: #F5DF4E;
        background: #2c2c2c;
        border-radius: 0.2em;
        padding: 0.33em;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #F5DF4E;

    &:focus, &:hover, &:visited, &:StyledLink, &:active {
    text-decoration: none;
}
`

const Intro = () => {


    return (
     <>
        <Header/>
        <IntroContainer>
            <div>
                <h2>Hi! I am Andras Gombos</h2>
                <h1>Full-Stack Developer</h1>
                <NavigationContainer>
                    <h3><StyledLink to='/about'>more about me</StyledLink></h3>
                    <h3><StyledLink to='/projects'>check out my projects</StyledLink></h3>
                </NavigationContainer>
            </div>
            <img src={me2} alt='me'></img>
        </IntroContainer>
    </>

    )
}

export default Intro;