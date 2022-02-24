import React from 'react';
import styled from 'styled-components';
import { DataContainer, GlobalBackground } from '../styles/globalstyles';
import Header from './header';
import goesvideo from '../assets/goesvideo.mp4';
import soc1 from '../assets/motion1.png'
import soc2 from '../assets/motion2.png'
import photo from '../assets/photosite.mp4'
import luna1 from '../assets/luna1.png'

const ProjectContainer = styled.div`
    width: 50%;
    border-right: 4px solid #F5DF4E;
    border-bottom: 4px solid #F5DF4E;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const VideoContainer = styled.video`
    width: 500px;
    height: 300px;
`

const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    img {
        width: 460px;
        height: 300px;
    }
`
const TitleContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: #F5DF4E;;
        background: #2c2c2c;
        border-radius: 0.2em;
        padding: 0.1em;
    }
`

const Projects = () => (
    <>
        <Header/>
        <GlobalBackground>
            <TitleContainer>
                <h2>Projects</h2>
                <p>A glimpse look at some of my projects. All of them and more are accessible on my <a target='_blank' rel='noreferrer' href='https://github.com/andrisgombos/'>Github</a> account.</p>
            </TitleContainer>
            <DataContainer>
                <ProjectContainer>
                    <h3>GOES project</h3>
                    <VideoContainer controls autoPlay src={goesvideo}/>
                    <p>A plankton survey application that we created from scratch with a four-man team for our final project at the SIT academy. </p>
                    <p>It contains a global map for sample location and a custom photo annotation tool to able scientists to mark and identify different types of planktons.</p>
                </ProjectContainer>
                <ProjectContainer>
                    <h3>Social Media Site</h3>
                    <PhotoContainer>
                        <img src={soc2} alt='social media site preview'/>
                        <p>Social media site containing both Front and Backend developed in a Docker container.</p>
                        <p>Users can share thought, pictures, interact with each other's posts. Stack used: React.js, Django, Docker, Nginx.</p>
                    </PhotoContainer>
                </ProjectContainer>
            </DataContainer>
            <DataContainer>
                <ProjectContainer>
                    <h3>Photogram</h3>
                    <VideoContainer controls autoPlay src={photo}/>
                    <p>A photo share & upload application where users can keep their pictures as a virtual photo album.</p>
                    <p>The application was built with React and JavaScript, the back end is provided by Google's Firebase.</p>
                </ProjectContainer>
                <ProjectContainer>
                    <h3>Restaurant Project</h3>
                    <PhotoContainer>
                        <img src={luna1} alt='restaurant site preview'/>
                        <p>Online restaurant platform where users can search, add, delete restaurants. They can also interact with each other, leaving comments on restaurants and rating them on previous experience.</p>
                    </PhotoContainer>
                </ProjectContainer>
            </DataContainer>
        </GlobalBackground>
    </>
)

export default Projects;