import React from 'react';
import styled from 'styled-components';

const SchoolContainer = styled.div`
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


const Degree = ({data} : {data: any}) => (
    <>
        <SchoolContainer>
            <h4><a target='_blank' rel='noreferrer' href={data.link}>{data.school}</a> - {data.degree}</h4>
            <p>{data.year}</p>
        </SchoolContainer>
    </>
)

export default Degree;