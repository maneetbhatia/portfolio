import styled, {keyframes} from 'styled-components'
import ProjectImg from '../Assests/eventmaster.png'
import ProjectImg1 from '../Assests/Critter.jpg'
import ProjectImg2 from '../Assests/ShopFit.jpg'
import ProjectImg3 from '../Assests/Space-Survival.jpg'
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {
    return(
    <Main>
      <Work>
      <H1>Projects</H1>
      <Border></Border>
      <Wrapper>
          <Project1>
            <a href="https://www.youtube.com/watch?v=BgLvQHUA0JQ" target="_blank"> 
            <Img src={ProjectImg} alt="GIPHY-API" />
            </a>
            <ProjInfo>
              <h3>EventMaster</h3>
              <a href="https://github.com/maneetbhatia/EventMaster" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project1>

          <Project2>
          <a href="https://www.youtube.com/watch?v=8FceWWIFynQ" target="_blank"> 
          <Img src={ProjectImg2} alt="Trivia Game" />
          </a>
          <ProjInfo>
              <h3>ShopFit</h3>
              <a href="https://github.com/maneetbhatia/ShopFit" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project2>

          <Project3>
            <a href="https://www.youtube.com/watch?v=RXFvAIZ16RQ" target="_blank"> 
            <Img src={ProjectImg1} alt="Rutgers Info Widget" />
            </a>
            <ProjInfo>
              <h3>Critter</h3>
              <a href="https://github.com/maneetbhatia/Critter" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project3>

          <Project4>
            <a href="https://maneetbhatia.github.io/space-survival/" target="_blank"> 
            <Img src={ProjectImg3} alt="Rock Paper Scissors" />
            </a>
            <ProjInfo>
              <h3>Space-Survival</h3>
              <a href="https://github.com/maneetbhatia/Space-Survival" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project4>
    </Wrapper>
    </Work>
    </Main>
    )
}

export default Portfolio;

const Main = styled.div`
  background-color: white;
`

const Border = styled.div`
  border-top: 5px solid grey;
  width: 3%;
  margin: auto;
  padding-bottom: 60px;
  margin-top: 20px;
`

const Work = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 80px;

  @media (max-width: 1300px) {
        width: 90%;
  }

  @media (max-width: 1100px) {
        width: 95%;
  }
`

const H1 = styled.h1`
  text-align: center;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 1%;
  justify-content: space-around;
  font-family: Georgia, Times, "Times New Roman", serif;
  padding-bottom: 50px;

  @media (max-width: 950px) {
        grid-template-columns: 75%;
        padding-bottom: 100px;
  }

  @media (max-width: 800px) {
        grid-template-columns: 90%;
  }
`

const Img = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 1px solid black;
`

const flash = keyframes`
    0% { transform: scale(0); }
    100% { transform: scale(1); }
`;

const Project1 = styled.div`
  margin: 10% 0px;
  border-radius: 15px 15px 5px 5px;
  box-shadow: 1px 1px 10px 1px black;
  animation: ${flash} 0.8s linear;

  &:hover{
    transform: scale(1.05);
    transition: 200ms transform ease-in-out;
  }

  @media (max-width: 950px) {
    margin: 10% 0px 5% 0px;
  }
`

const Project2 = styled.div`
  margin: 10% 0px;
  border-radius: 15px 15px 5px 5px;
  box-shadow: 1px 1px 10px 1px black;
  animation: ${flash} 0.8s linear;
  
  &:hover{
      transform: scale(1.05);
      transition: 200ms transform ease-in-out;
  }
`

const Project3 = styled.div`
  margin: 8% 0px;
  border-radius: 15px 15px 5px 5px;
  box-shadow: 1px 1px 10px 1px black;
  animation: ${flash} 1s linear;
  &:hover{
    transform: scale(1.05);
    transition: 200ms transform ease-in-out;
  }
`

const Project4 = styled.div`
  margin: 8% 0px;
  box-shadow: 1px 1px 10px 1px black;
  border-radius: 15px 15px 5px 5px;
  animation: ${flash} 1s linear;
  &:hover{
    transform: scale(1.05);
    transition: 200ms transform ease-in-out;
  }
`

const ProjInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
  background-color: whitesmoke;
  border-radius: 0px 0px 15px 15px;
`