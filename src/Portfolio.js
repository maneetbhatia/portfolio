import styled from 'styled-components'
import ProjectImg from './Assests/eventmaster.png'
import ProjectImg1 from './Assests/eventmaster.png'
import ProjectImg2 from './Assests/eventmaster.png'
import ProjectImg3 from './Assests/eventmaster.png'
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {
    return(
    <Main>
      <H1>Projects</H1>
      <Wrapper>
          <Project1>
            <a href="https://maneetbhatia.github.io/Favorite-Gifs/" target="_blank"> 
            <Img src={ProjectImg} alt="GIPHY-API" /></a>
            <ProjInfo>
              <h3>EventMaster</h3>
              <a href="https://github.com/maneetbhatia/EventMaster" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
            
          </Project1>

          <Project2>
          <a href="https://maneet79.github.io/Trivial-Trivia/" target="_blank"> 
          <Img src={ProjectImg2} alt="Trivia Game" /></a>

          <ProjInfo>
              <h3>EventMaster</h3>
              <a href="https://github.com/maneetbhatia/EventMaster" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project2>
          <Project3>
            <a href="https://maneet79.github.io/Crystal-Collector/." target="_blank"> 
            <Img src={ProjectImg1} alt="Rutgers Info Widget" /></a>

            <ProjInfo>
              <h3>EventMaster</h3>
              <a href="https://github.com/maneetbhatia/EventMaster" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project3>
          <Project4>
            <a href="https://maneet79.github.io/Guess-Game/." target="_blank"> 
            <Img src={ProjectImg3} alt="Rock Paper Scissors" /></a>

            <ProjInfo>
              <h3>EventMaster</h3>
              <a href="https://github.com/maneetbhatia/EventMaster" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project4>
    </Wrapper>
    </Main>
    )
}

export default Portfolio;

const Main = styled.div`
width: 70%;
margin: auto;
margin-top: 80px;
`


const H1 = styled.h1`
text-align: center;
margin-bottom: 40px;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 45% 45%;
grid-gap: 1%;
justify-content: space-around;
font-family: Georgia, Times, "Times New Roman", serif;
margin-bottom: 130px;
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

const ProjInfo = styled.div`
display: flex;
justify-content: space-between;
`