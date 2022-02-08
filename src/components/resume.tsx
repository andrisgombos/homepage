import React from 'react';
import styled from 'styled-components';
import Header from './header';
import degrees from '../data/resume';
import experience from '../data/experience';

const ResumeContainer = styled.div`
    `

const sections = [ degrees, experience]

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