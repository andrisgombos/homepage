import React from 'react';
import styled from 'styled-components';
import Header from './header';

const ProjectsContainer = styled.div`
    `

const Projects = () => (
    <>
        <Header/>
        <ProjectsContainer>
            <div>GOES project</div>
            <div>Photo App</div>
            <div>Social Media Site</div>
        </ProjectsContainer>
    </>
)

export default Projects;