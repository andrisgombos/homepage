import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
    npmcolor: palevioletred;
`

const Header = () => (
  <>
    <Navbar>
        <h1>GA</h1>
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