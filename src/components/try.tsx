import react, { useState } from 'react';
import styled from 'styled-components';
import Header from './header';
import degrees from '../data/resume';
import xp from '../data/experience'
import { skills1, skills2 } from '../data/skills'
import Experience from './resume/experience';
import Degree from './resume/degree';
import StarRating from './resume/starrating';
import arrowdown from '../assets/arrowdown.svg'
import arrowright from '../assets/arrowright.svg'

const ResumeBackground = styled.div`
    width: 100vw;
    background-color: #F5DF4E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset rgba(0, 0, 0, 0.15) 0px 5px 15px;
    padding-top: 2.5em;
    padding-bottom: 2.5em;
`

const ResumeContainer = styled.div`
    width: 60vw;
    background-color: #F5F5F5;
    border-radius: 0.5em;
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

    img {
        width: 0.75em;
        height: 0.75em;
    }
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

const TitleContainer = styled.div`
    width: auto;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`



const TabResume = () => {

    //  state for active containers
    const [activeExp, setactiveExp ] = useState(false)
    const [activeEdu, setactiveEdu ] = useState(false)
    const [activeSkills, setactiveSkills ] = useState(false)
    // handles for collapsing containers
    const handleTab1 = () => {
        setactiveExp(!activeExp)
    }
    const handleTab2 = () => {
        setactiveEdu(!activeEdu)
     }
    const handleTab3 = () => {
        setactiveSkills(!activeSkills)
    }

    // const bgChange = () => {
    //     if (activeExp === true && activeEdu === true && activeSkills === true) {
    //         bgStyle.height = '100vh'
    //     } else { bgStyle.height = '100%'}

    return (
     <>
        <Header/>

        <ResumeBackground style={{height: activeExp && activeSkills ? '83vh' : '100%' }}>
            <TitleContainer>
                <h2>Resume</h2>
            </TitleContainer>
            <ResumeContainer>
                <BracketContainer id='tab1'>
                    <h3 onClick={handleTab1}>Experience {activeExp === false ? <img src={arrowdown} alt='small arrow down'/> : <img src={arrowright} alt='small arrow right'/> }</h3>
                    {activeExp === false ? 
                    <MapContent>
                        {xp.map((job) => <Experience data={job} key={job.company}/>)}
                    </MapContent> : null }
                </BracketContainer>
                <BracketContainer id='tab2'>
                    <h3 onClick={handleTab2}>Education {activeEdu === false ? <img src={arrowdown} alt='small arrow down'/> : <img src={arrowright} alt='small arrow right'/> }</h3>
                    {activeEdu === false ?
                    <MapContent>
                        {degrees.map((d) => <Degree data={d} key={d.school}/>)}
                    </MapContent>  : null }
                </BracketContainer>
                <BracketContainer id='tab3'>
                    <h3 onClick={handleTab3}>Skills {activeSkills === false ? <img src={arrowdown} alt='small arrow down'/> : <img src={arrowright} alt='small arrow right'/> }</h3>
                        {activeSkills === false ?
                        <SkillsBracketContainer> 
                            <SkillsMap>
                                {skills1.map((s) => <StarRating rating={s.rating} key={s.rating} name={s.name} />)}
                            </SkillsMap>
                            <SkillsMap>
                                {skills2.map((s) => <StarRating rating={s.rating} key={s.rating} name={s.name} />)}
                            </SkillsMap>
                        </SkillsBracketContainer>: null }
                </BracketContainer>
            </ResumeContainer>
        </ResumeBackground>
    </>

    )
}

export default TabResume;