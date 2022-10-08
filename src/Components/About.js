import styled,{keyframes}  from 'styled-components';

const About = () => {
    return(
    <Main>
      <AboutInfo>
        <H1>About Me</H1>
        <Border></Border>
      <Wrapper>
        <AboutMe>
          <p>
            I am a Full Stack Web Developer(MERN Stack), who's always look for an opportunity to code, design, and build
            new websites/web apps. I have built web presence from the ground up, updated website's data according to the business requirements and added new features as per business needs. Also, In my spare time, 
            I always search for new strategies which helps me improve my skill coding set. 
          </p>
          <Mail>For any enquires and questions, please send me
            <EmailLink href="mailto:someone@example.com">email</EmailLink>.
          </Mail>
        </AboutMe>
        <Skills>
          <H4>SKILLS & TOOLS</H4>
          <List>
            <P >Html 5</P>
            <P >Css 3</P>
            <P >Styled-Components</P>
            <P>Bootstrap</P>
            <P>JavaScript</P>
            <P>React</P>
            <P>Node.js</P>
            <P>Express</P>
            <P>MongoDB</P>
            <P>Git & Github</P>
          </List>
          <List1>
            <P>React</P>
            <P>Node.js</P>
            <P>Express</P>
            <P>MongoDB</P>
            <P>Git & Github</P>
          </List1>
          <List2>
            <P >Html 5</P>
            <P >Css 3</P>
            <P >jQuery</P>
            <P>Bootstrap</P>
            <P>JavaScript</P>
          </List2>
        </Skills>
        
      </Wrapper>
      </AboutInfo>
    </Main>
    )
}

//``````````````MEDIA QUIRES```````````````

export default About;

const Main = styled.div`
  min-height: calc(100vh - 113px);
`

const Border = styled.div`
  border-top: 5px solid grey;
  width: 3%;
  margin: auto;
  padding-bottom: 60px;
  margin-top: 20px;
`

const AboutInfo = styled.div`
  width: 70%;
  margin: auto;
  padding-top: 80px;
  color: white;

  @media (max-width: 1300px) {
    width: 80%;
  }

  @media (max-width: 1160px) {
    width: 90%;
  }
`

const H1 = styled.h1`
  text-align: center;
`

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1050px) {
    flex-direction: column;
    margin-bottom: 160px;
  }
`

const EmailLink = styled.a`
  text-decoration: none;
  color: grey;
  margin-left: 5px;

  &:hover{
    color: white;
  }
`

const Mail = styled.p`
  margin-top: 57px;
`

const flash = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

const AboutMe = styled.div`
  width: 55%;
  font-size: 25.5px;
  margin-left: 60px;
  text-align: justify;

  @media (max-width: 1050px) {
    width: 80%;
    margin: auto;
  }
`


const Skills = styled.div`
  width: 25%;
  margin-right: 50px;
  font-size: 20px;
  margin-top: 3px;

  @media (max-width: 1050px) {
    width: 80%;
    margin: auto;
    margin-top: 130px;
  }
`

const H4 = styled.h4`

  @media (max-width: 1050px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`

const List = styled.ul`
  margin-top: 26px;
  font-size: 19.5px;
  animation: ${flash} 1s linear;

  @media (max-width: 1050px) {
    display: none;
  }
`

const List1 = styled.ul`
  float: left;
  font-size: 19.5px;
  animation: ${flash} 1s linear;
  display: none;

  @media (max-width: 1050px) {
    display: block;
  }
`

const List2 = styled.ul`
  float: right;
  font-size: 19.5px;
  animation: ${flash} 1s linear;
  display: none;

  @media (max-width: 1050px) {
    display: block;
  }
`

const P = styled.li`
  margin-bottom: 5px;
  list-style: none;

  @media (max-width: 1050px) {
    margin-right: 20px;
  }
`