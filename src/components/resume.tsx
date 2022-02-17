import React from 'react';
import styled from 'styled-components';
import Header from './header';
import degrees from '../data/resume';
import xp from '../data/experience'
import skills from '../data/skills';
import { GlobalBackground } from '../styles/globalstyles';
import Experience from './resume/experience';

const ResumeContainer = styled.div`
    height: 100%;
    width: 85vw;
    background-color: #F5F5F5;

    li {
        display: inline-block;
        text-decoration: none;
    }

    div {
        display: flex;
        flex-direction: column;

    }
`


const Resume = () => {


    return (
     <>
        <Header/>
        <GlobalBackground>
            <ResumeContainer>
                <h3>Experience</h3>
                <div>
                    {xp.map((job) => <Experience data={job} key={job.company}/>)}
                </div>
                <h3>Education</h3>
                {/* <div>{degrees.map((d) => <li>{d.school} - {d.degree} - {d.link} - {d.year}</li>)}</div> */}
                <h3>Skills</h3>
                <div>{skills}</div>
            </ResumeContainer>
        </GlobalBackground>
    </>

    )
}

export default Resume;