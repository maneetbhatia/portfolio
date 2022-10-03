import styled from 'styled-components'
import ProjectImg from './Assests/eventmaster.png'
import ProjectImg1 from './Assests/Critter.jpg'
import ProjectImg2 from './Assests/ShopFit.jpg'
import ProjectImg3 from './Assests/Space-Survival.jpg'
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {
    return(
    <Main>
      <Work>
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
              <h3>ShopFit</h3>
              <a href="https://github.com/maneetbhatia/ShopFit" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project2>

          <Project3>
            <a href="https://maneet79.github.io/Crystal-Collector/." target="_blank"> 
            <Img src={ProjectImg1} alt="Rutgers Info Widget" /></a>
            <ProjInfo>
              <h3>Critter</h3>
              <a href="https://github.com/maneetbhatia/Critter" target="_blank">
                <AiFillGithub size={25}/>
              </a>
            </ProjInfo>
          </Project3>

          <Project4>
            <a href="https://maneetbhatia.github.io/space-survival/" target="_blank"> 
            <Img src={ProjectImg3} alt="Rock Paper Scissors" /></a>
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

const Work = styled.div`
  width: 70%;
  margin: auto;
  padding-top: 80px;
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
  padding-bottom: 50px;
`

const Img = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 1px solid black;
`

const Project1 = styled.div`
  margin: 10% 0px;
  border-radius: 15px 15px 5px 5px;
  box-shadow: 1px 1px 10px 1px black;

  &:hover{
    transform: scale(1.05);
    transition: 200ms transform ease-in-out;
  }

`

const Project2 = styled.div`
  margin: 10% 0px;
  border-radius: 15px 15px 5px 5px;
  box-shadow: 1px 1px 10px 1px black;

  &:hover{
      transform: scale(1.05);
      transition: 200ms transform ease-in-out;
  }
`

const Project3 = styled.div`
  margin: 10% 0px;
  border-radius: 15px 15px 5px 5px;
  box-shadow: 1px 1px 10px 1px black;

  &:hover{
    transform: scale(1.05);
    transition: 200ms transform ease-in-out;
  }
`

const Project4 = styled.div`
  margin: 10% 0px;
  box-shadow: 1px 1px 10px 1px black;
  border-radius: 15px 15px 5px 5px;

  &:hover{
    transform: scale(1.05);
    transition: 200ms transform ease-in-out;
  }
`

const ProjInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
  background-color: aliceblue;
  border-radius: 0px 0px 5px 5px;
`