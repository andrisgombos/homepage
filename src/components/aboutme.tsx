import React from 'react';
import styled from 'styled-components';
import Header from './header';
import me from '../assets/abme3.png';

const AboutContainer = styled.div`
    width: 70vw;
    height: 100%;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(211, 211, 211, .5);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    margin-bottom: 5em;

    div {
        width: 85%;
        padding-top: 2em;
        padding-bottom: 2em;

    }



`
const TitleContainer = styled.div`
    width: auto;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const AboutBackground = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #F5DF4E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: inset rgba(0, 0, 0, 0.15) 0px 5px 15px;

    img {
        width: 70vw;
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
    }
`

const Aboutme = () => (
    <>
        <Header/>
        <AboutBackground>
            <TitleContainer>
                <h2>About me</h2>
            </TitleContainer>
            <img src={me} alt='me'></img>
            <AboutContainer>
                <div>
                    <p>My fascination with creating and building complex structures started at a young age: while other kids were climbing trees, I spent hours and hours on building plane models or coming up with tricks on my old Pentium 2.</p>
                    <p>In the last couple of years, I spend most of my days in front of the computer. Driven by my curiosity (some can call it laziness), I started to optimize and automatize the everyday processes I was doing at my job. To be honest, I really enjoyed this role and with success, my passion for innovation grew, always questioning old practices and constantly seeking for new solutions. It lead directly to an interest in coding, especially web development.</p>
                    <p>After several months of individual studies and an intensive bootcamp course, I feel I am ready to take the industry challenges head-on. My current focus is to continuously improve myself, learning new technologies which keep forming the future of web development. This includes gaining experience in Cloud and Mobile Development, getting familiar with Progressive Web Apps. </p>
                    <p>In my free time, I enjoy hiking, playing football and old PC games. Due to COVID my dream is to visit every continent is currently on hold, but hopefully not for long! </p>
                </div>    
            </AboutContainer>
        </AboutBackground>
    </>
);

export default Aboutme;