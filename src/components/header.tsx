import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styling details for the navbar

const Navbar = styled.div` 
    width: 100vw;
    display: flex;
    flex-direction: row;
    height: 7vh;
    left: 0;
    align-items: center;
    justify-content: flex-start;
    // background-color: #F5F5F5;
    position:relative;
    float:left;
    
    span {
        display: inline;
        font-size: 0.9em;
        padding: 0 0 0 1.5em;
        font-weight: 100;
        font-size: 1em;
        position:relative;
        float:left;
    }

    ul {
        width: 30%;
        left: 0;
        display: flex;
        justify-content: space-around;
        list-style: none;
        position:relative;
        float:left;
        
        }

    li {
        display: inline-block;
        transition: all 0.2s ease;
        border-left: 2px solid #F5DF4E;
        padding-left: 1em;
        position:relative;
        float:left;
        
    }

    
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:StyledLink, &:active {
        text-decoration: none;
    }
`;

const Header = () => (
  <>
    <Navbar>
        <span><StyledLink to="/">Gombos Andras</StyledLink></span>
        <ul>
            <li><StyledLink to="/about">about me</StyledLink></li>
            <li><StyledLink to="/resume">resume</StyledLink></li>
            <li><StyledLink to="/projects">projects</StyledLink></li>
            <li><StyledLink to="/contact">contact</StyledLink></li>
        </ul>
    </Navbar>
  </>
);

export default Header;