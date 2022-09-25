import styled from 'styled-components'
import backgroungImg from './Assests/background.jpg';

const About = () => {
    return(
    <Main>
      <AboutInfo>
        <H1>About Me</H1>
      <Wrapper>
        <AboutMe>
          <p>
            I am a Full Stack Web Developer(MERN Stack), who's always look for an opportunity to code, design, and build
            new websites/web apps. I have built web presence from the ground up, updated website's data according to the business requirements and added new features as per business needs. Also, In my spare time, 
            I always search for new strategies which helps me improve my skill coding set. 
          </p>
          <Mail>For any enquires and questions, please send me email:
            <EmailLink href="mailto:someone@example.com">maneetbhatia79@gmail.com</EmailLink>.
          </Mail>
        </AboutMe>
        <Skills>
            <h4>SKILLS & TOOLS</h4>
          <List>
            <P >HTML5</P>
            <P >CSS3</P>
            <P >STYLED-COMPONENTS</P>
            <P>BOOTSTRAP</P>
            <P>JAVASCRIPT</P>
            <P>REACT</P>
            <P>NODE.JS</P>
            <P>EXPRESS</P>
            <P>MONGO-DB</P>
            <P>GIT & GITHUB</P>
            
          </List>
        </Skills>
        
      </Wrapper>
      </AboutInfo>
    </Main>
    )
}

export default About;

const Main = styled.div`
  min-height: calc(100vh - 113px);
  `

const AboutInfo = styled.div`
width: 70%;
margin: auto;
padding-top: 80px;
color: white;
`

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 80px;
`

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const EmailLink = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 5px;
`

const Mail = styled.p`
  margin-top: 25px;
`

const AboutMe = styled.div`
  width: 55%;
  font-size: 25.5px;
  margin-left: 60px;
  text-align: justify;
`

const Skills = styled.div`
  width: 25%;
  margin-right: 50px;
  font-size: 20px;
  margin-top: 3px;
`


const List = styled.ul`
  margin-top: 26px;
  font-size: 19.5px;
`

const P = styled.li`
  margin-bottom: 5px;
  list-style: none;
`