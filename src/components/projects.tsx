import React from 'react';
import styled from 'styled-components';
import { DataContainer, GlobalBackground } from '../styles/globalstyles';
import Header from './header';
import goesvideo from '../assets/goesvideo.mp4';

const ProjectContainer = styled.div`
    width: 50%;
    border-right: 2px solid #F5DF4E;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const VideoContainer = styled.video`
    width: 500px;
    height: 300px;
`

const Projects = () => (
    <>
        <Header/>
        <GlobalBackground>
            <DataContainer>
                <ProjectContainer>
                    <h3>GOES project</h3>
                    <VideoContainer controls autoPlay src={goesvideo}/>
                    <p>A plankton survey application that we created from scratch with a four-man team for our final project at the SIT academy. </p>
                    <p>It contains a global map for sample location and a custom photo annotation tool to able scientists to mark and identify different types of planktons.</p>
                </ProjectContainer>
                <ProjectContainer>
                    <h3>Social Media Site</h3>
                    
                </ProjectContainer>
            </DataContainer>
        </GlobalBackground>
    </>
)

export default Projects;