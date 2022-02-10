import React from 'react';
import styled from 'styled-components';
import Header from './header';
import degrees from '../data/resume';
import experience from '../data/experience';

const ResumeContainer = styled.div`
    `

// const sections = [ degrees, experience]



const Resume = () => {


    return (
     <>
        <Header/>
        <ResumeContainer>
            <div>Experience</div>
            <div>Education</div>
            <div>{degrees.map((d) => <li>{d.school} - {d.degree} - {d.link} - {d.year}</li>)}</div>
            <div>Skills</div>
        </ResumeContainer>
    </>

    )
}

export default Resume;