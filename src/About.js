import styled from 'styled-components'
import {Link} from "react-router-dom"
const About = () => {
    return(
    <Main>
        <H1>About Me</H1>
      <Wrapper>
        <AboutMe>
          <p>
            I am a Full Stack Web Developer(MERN Stack), who's always look for an opportunity to code, design and learn
            new coding skills. In my spare time, I build website/web apps and search for new strategies which will help me improve my skill
            set. 
          </p>
          <Mail>For any enquires & questions, please send me a
            <EmailLink to="mailto:someone@example.com">e-mail</EmailLink>.
          </Mail>
        </AboutMe>
        <Skills>
          <List>
            <P >HTML5</P>
            <P >CSS3</P>
            <P >STYLED-COMPONENTS</P>
            <P>JAVASCRIPT</P>
            <P>JQUERY</P>
            <P>SCSS</P>
            <P>REACT</P>
            <P>NODE</P>
            <P>MONGO-DB</P>
            <P>MYSQL</P>
            <P>GIT & GITHUB</P>
            <P>VS CODE</P>
          </List>
        </Skills>
      </Wrapper>
    </Main>
    )
}

export default About;

const Main = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 80px;
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

const EmailLink = styled(Link)`
text-decoration: none;
color: grey;
margin-left: 5px;
`

const Mail = styled.p`
margin-top: 25px;
`

const AboutMe = styled.div`
  width: 45%;
  font-size: 25px;
`

const Skills = styled.div`
  width: 25%;
`


const List = styled.ul`
`

const P = styled.li`
margin-bottom: 5px;
list-style: none;
`