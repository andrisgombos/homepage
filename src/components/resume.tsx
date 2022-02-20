import React from 'react';
import styled from 'styled-components';
import Header from './header';
import degrees from '../data/resume';
import xp from '../data/experience'
import { skills1, skills2 } from '../data/skills'
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

`
const MapContent = styled.div`
    display: flex;
    flex-direction: column;
`

const BracketContainer = styled.div`
    width: 100%;
    border-bottom: 4px solid #F5DF4E;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: start;
`
const SkillsBracketContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;

`

const SkillsMap = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Resume = () => {


    return (
     <>
        <Header/>
        <GlobalBackground>
            <ResumeContainer>
                <BracketContainer>
                    <h3>Experience</h3>
                    <MapContent>
                        {xp.map((job) => <Experience data={job} key={job.company}/>)}
                    </MapContent>
                    </BracketContainer>
                <BracketContainer>
                    <h3>Education</h3>
                    <MapContent>
                        {degrees.map((d) => <Degree data={d} key={d.school}/>)}
                    </MapContent>
                </BracketContainer>
                <BracketContainer>
                <h3>Skills</h3>
                    <SkillsBracketContainer> 
                        <SkillsMap>
                            {skills1.map((s) => <StarRating rating={s.rating} key={s.rating} name={s.name} />)}
                        </SkillsMap>
                        <SkillsMap>
                            {skills2.map((s) => <StarRating rating={s.rating} key={s.rating} name={s.name} />)}
                        </SkillsMap>
                    </SkillsBracketContainer>
                </BracketContainer>
            </ResumeContainer>
        </GlobalBackground>
    </>

    )
}

export default Resume;