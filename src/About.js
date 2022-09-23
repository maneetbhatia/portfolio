import styled from 'styled-components'

const About = () => {
    return(
    <Main>
        <h1>About</h1>
      <Wrapper>

        <p>
          I'm a Full Stack Developer(MERN). Always looking for an opportunity to code, design and learn
          new coding skills. In my spare time, I build website/web apps and search for new strategies which will help me improve my skill
          set. For any enquires & questions, please click
          <a href="mailto:someone@example.com">here</a>.
        </p>

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
        </List>
      </Wrapper>
    </Main>
    )
}

export default About;

const Main = styled.div`
width: 70%;
margin: auto;
margin-top: 30px;
`

const Wrapper = styled.div`
margin-top: 10px;
`

const List = styled.ul`
margin-top: 30px;
background-color: aliceblue;
`

const P = styled.p`

`