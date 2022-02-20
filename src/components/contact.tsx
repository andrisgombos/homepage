import React from 'react';
import styled from 'styled-components';
import Header from './header';
import mail from '../assets/mail4.png'
import github from '../assets/github.png'
import linkedin from '../assets/in.png'

const TitleContainer = styled.div`
    width: auto;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContactBackground = styled.div`
    width: 100vw;
    height: 93vh;
    background-color: #F5DF4E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: inset rgba(0, 0, 0, 0.15) 0px 5px 15px;
`
const ContactContainer = styled.div`
    width: 40vw;
    height: 40vh;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(211, 211, 211, .5);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;

    div {
        display: flex;
        flex-direction: row;
        margin: 0.6em;
        align-items: center;
        justify-content: center;
    }

    a {
        text-decoration: none;

        &:focus, &:hover, &:visited, &:StyledLink, &:active {
            text-decoration: none;
        }
    }
    
`

const Logo = styled.img`
    width: 25px;
    height: 25px;
    padding-right: 0.5em;
`

const Contact = () => (
       <>
        <Header/>
        <ContactBackground>
            <TitleContainer>
                <h2>Contact</h2>
            </TitleContainer>
            <ContactContainer>
                <h4>Feel free to get in touch!</h4>
                <p>my socials</p>
                <div>
                    <Logo src={mail} alt='mail logo' />
                    <a href='mailto:andrisgombos@gmail.com'>Andras Gombos @ gmail</a>
                </div>
                <div>
                    <Logo src={github} alt='github logo' />
                    <a target='_blank' rel='noreferrer' href='https://github.com/andrisgombos/'>GitHub Profile</a>
                </div>
                <div>
                    <Logo src={linkedin} alt='linkedin logo' />
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/andrasgombos/'>LinkedIn</a>
                </div>
            </ContactContainer>
        </ContactBackground>
    </>
)

export default Contact;