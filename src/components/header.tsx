import React from 'react';
import styled from 'styled-components';


// Styling details for the navbar

const Navbar = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 3.5em;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 100;
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
            <li>about me</li>
            <li>resume</li>
            <li>projects</li>
            <li>contact</li>
        </ul>
    </Navbar>
  </>
);

export default Header;