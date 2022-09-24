import styled from "styled-components";
import {Link} from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Home = () => {
    return (
        <Main>
        <P>Hello, I'm</P>
        <H1>Maneet Bhatia.</H1>
        <H3>Full-Stack web developer, avid traveller and sports enthusiast.</H3>
        <Icons>
            <Span><AiFillGithub size={30}/></Span>
            <Span><AiFillLinkedin size={30}/></Span>
            <Span><AiOutlineMail size={30}/></Span>
        </Icons>
        <LogoLink to="/about" >About Me</LogoLink>
        </Main>
    )

}

export default Home;

const Main = styled.div`
width: 70%;
margin: auto;
margin-top: 160px;
`

const P = styled.p`
font-size: 25px;

`

const H1 = styled.p`
font-size: 80px;
margin: 20px 0px;
`

const H3 = styled.h3`
font-size: 30px;
`

const Icons = styled.p`
margin: 25px 40px 40px 0px;
`

const Span = styled.span`
margin-right: 40px;
`

const LogoLink = styled(Link)`
padding: 10px 25px;
border: 1px solid grey;
text-decoration: none;
color: grey;
font-size: 25px;
border-radius: 15px;

&:hover{
    background-color: grey;
    color: white;
}
`