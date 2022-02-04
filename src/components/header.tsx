import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styling details for the navbar

const Navbar = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 3.5em;
    left: 0;
    top: 0;
    border-bottom: solid 1px #2c2c2c;
    
    h1 {
        display: inline;
        font-size: 0.9em;
        padding: 0 0 0 1.5em;
    }

    ul {
        width: 100%;
        left: 0;
        display: flex;
        color: blue;
        list-style: none;
        }
    li {
        margin-left: 1.5em;
        display: inline-block;
        padding-left: 0;
        color: blue;
    }
    
`

const Header = () => (
  <>
    <Navbar>
        <h1>Gombos_Andras</h1>
        <ul>
            <li><Link to="/">about me</Link></li>
            <li><Link to="/resume">resume</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
    </Navbar>
  </>
);

export default Header;