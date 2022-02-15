import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styling details for the navbar

const Navbar = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 7vh;
    left: 0;
    align-items: center;
    
    span {
        display: inline;
        font-size: 0.9em;
        padding: 0 0 0 1.5em;
        font-weight: 100;
        font-size: 1em;
    }

    ul {
        width: 30%;
        left: 0;
        display: flex;
        justify-content: space-around;
        list-style: none;
        }

    li {
        margin-left: 1.5em;
        display: inline-block;
        padding-left: 0;
        transition: all 0.2s ease;
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