import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
    white-space: pre-wrap;
    margin-top: 1em;

    h4 {
        margin-block-start: 0em;
        margin-block-end: 0em;
    }

    p { 
        width: 90%;
        font-size: 12pt;
        margin-block-start: 0em;
        margin-block-end: 1em;
        }
   
    a {
        text-decoration: none;

        &:focus, &:hover, &:visited, &:StyledLink, &:active {
        text-decoration: none;
        }

}
`


const Experience = ({data} : {data: any}) => (
    <>
        <ExperienceContainer>
            <h4><a target='_blank' rel='noreferrer' href={data.link}>{data.company}</a> - {data.position}</h4>
            <p>{data.date}</p>
            <p>{data.points}</p>
        </ExperienceContainer>
    </>
)

export default Experience;