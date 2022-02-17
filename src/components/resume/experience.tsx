import React from 'react';
import styled from 'styled-components';

const Experience = ({data} : {data: any}) => (
    <>
        <h4><a target='_blank' rel='noreferrer' href={data.link}>{data.company}</a> - {data.position}</h4>
        <p>{data.date}</p>
        {/* <ul>
            {data.points.map((point : any) => (
                <li key={point}>{point}</li>
            ))}
        </ul> */}
    </>
)

export default Experience;