import React from 'react';
import styled from 'styled-components';
import Header from './header';

const ResumeContainer = styled.div`
    `

const Resume = () => (
    <>
        <Header/>
        <ResumeContainer>
            <div>Experience</div>
            <div>Education</div>
            <div>Skills</div>
        </ResumeContainer>
    </>
)

export default Resume;