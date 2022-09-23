import styled from 'styled-components'
import ProjectImg from './Assests/eventmaster.png'
import ProjectImg1 from './Assests/eventmaster.png'
import ProjectImg2 from './Assests/eventmaster.png'
import ProjectImg3 from './Assests/eventmaster.png'
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {
    return(
    <Main>
      <h1>Projects</h1>
      <Wrapper>
          <Project1>
            <a href="https://maneetbhatia.github.io/Favorite-Gifs/" target="_blank"> 
            <Img src={ProjectImg} alt="GIPHY-API" /></a>
            <h3>EventMaster<a href="https://github.com/maneetbhatia/EventMaster" target="_blank">
                <AiFillGithub /></a>
            </h3>
          </Project1>

          <Project2>
          <a href="https://maneet79.github.io/Trivial-Trivia/" target="_blank"> 
          <Img src={ProjectImg2} alt="Trivia Game" /></a>

            <h3>Critter<a href="https://github.com/maneetbhatia/Critter" target="_blank">
                <AiFillGithub /></a></h3>
          </Project2>
          <Project3>
            <a href="https://maneet79.github.io/Crystal-Collector/." target="_blank"> 
            <Img src={ProjectImg1} alt="Rutgers Info Widget" /></a>

            <h3>SpaceSurvival<a href="https://github.com/maneetbhatia/space-survival" target="_blank">
                <AiFillGithub /></a></h3>
          </Project3>
          <Project4>
            <a href="https://maneet79.github.io/Guess-Game/." target="_blank"> 
            <Img src={ProjectImg3} alt="Rock Paper Scissors" /></a>

            <h3>GifTastic<a href="https://github.com/maneetbhatia/Favorite-Gifs" target="_blank">
                <AiFillGithub /></a></h3>
          </Project4>
    </Wrapper>
    </Main>
    )
}

export default Portfolio;

const Main = styled.div`
width: 80%;
margin: auto;
margin-top: 30px;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 33% 33% 33%;
grid-gap: 1%;
justify-content: space-around;
`

const Img = styled.img`
width: 100%;
`

const Project1 = styled.div`
padding: 10% 0px;

`

const Project2 = styled.div`
padding: 10% 0px;
`

const Project3 = styled.div`
padding: 10% 0px;
`

const Project4 = styled.div`
padding: 10% 0px;
`