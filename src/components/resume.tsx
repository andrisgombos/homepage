import React from 'react';
import styled from 'styled-components';
import Header from './header';
import degrees from '../data/resume';
import xp from '../data/experience'
import skills from '../data/skills';
import { GlobalBackground, DataContainer } from '../styles/globalstyles';
import Experience from './resume/experience';
import Degree from './resume/degree';
import StarRating from './resume/starrating';

const ResumeContainer = styled.div`
    height: 100%;
    width: 60vw;
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
const BracketContainer = styled.div`
    width: 100%;
    border-bottom: 4px solid #F5DF4E;
    padding: 2em;
    display: flex;
    flex-direction: row;
    align-items: start;

`

const Resume = () => {


    return (
     <>
        <Header/>
        <GlobalBackground>
            <ResumeContainer>
                <BracketContainer>
                    <h3>Experience</h3>
                    <div>
                        {xp.map((job) => <Experience data={job} key={job.company}/>)}
                    </div>
                    </BracketContainer>
                <BracketContainer>
                    <h3>Education</h3>
                    <div>
                        {degrees.map((d) => <Degree data={d} key={d.school}/>)}
                    </div>
                </BracketContainer>
                <BracketContainer>
                    <h3>Skills</h3>
                    <div>
                        {skills.map((s) => <StarRating rating={s} key={s.stars} />)}
                    </div>
                    {/* <ul>
                        {skills.map((s) => (
                            <li>{s}</li>
                        ))}
                    </ul> */}
                </BracketContainer>
            </ResumeContainer>
        </GlobalBackground>
    </>

    )
}

export default Resume;